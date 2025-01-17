import { CommonModule } from "@angular/common";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { Booking, Flight, Passenger } from "../types";
import { FlightsService } from "../services/flights.service";
import { ActivatedRoute, Router } from "@angular/router";
import { BookingsService } from "../services/bookings.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-book-flight-form",
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: "./user-book-flight-form.component.html",
  styleUrl: "./user-book-flight-form.component.scss",
})
export class UserBookFlightFormComponent implements OnInit, OnDestroy {
  flight?: Flight;

  bookings_service = inject(BookingsService);
  flight_service = inject(FlightsService);
  flight_subscription!: Subscription;
  bookings_subscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnDestroy(): void {
    this.flight_subscription.unsubscribe();
    this.bookings_subscription.unsubscribe()
  }

  all_flights: Flight[] = [];
  passenger_details: Passenger[] = [{ passport_number: "", full_name: "" }];

  ngOnInit() {
    const code = this.route.snapshot.paramMap.get("flight_id"); // Retrieve the parameter
    if (!code) {
      alert("Invalid flight id provided.");
      this.router.navigate(["/admin-manage-flights"]); // If no code is provided, redirect to the destinations page
      return;
    }
    this.flight_subscription = this.flight_service.flights.subscribe((flights) => {
      this.all_flights = flights;
      const dest = flights.find((d) => d.flight_id == code); // Find the destination with the matching code
      if (!dest) {
        alert("Destination not found.");
        this.router.navigate(["/admin-manage-destinations"]); // If no destination is found, redirect to the destinations page
        return;
      }
      this.flight = dest;
    });
  }
  declarePassengers(n: any) {
    if (n > this.passenger_details.length) {
      let add = n - this.passenger_details.length;
      for (let i = 0; i < add; i++) {
        this.passenger_details.push({ passport_number: "", full_name: "" });
      }
    } else {
      this.passenger_details = this.passenger_details.slice(0, n);
    }
  }

  bookFlight() {
    if (this.passenger_details.some((p) => !p.full_name || !p.passport_number)) {
      alert("Please fill in all passenger details.");
      return;
    }
    this.bookings_service.addBooking({
      booking_id: "", // by firebase
      flight: this.flight!,
      passengers: this.passenger_details,
    });
    alert("Flight booked successfully!");
    window.location.reload();
    window.location.href = "/user-book-flight"
  }
}
