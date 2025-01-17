import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { DestinationsService } from "../services/destinations.service";
import { FlightsService } from "../services/flights.service";
import { Destination, Flight } from "../types";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { MatRadioModule } from "@angular/material/radio";
@Component({
  selector: "app-admin-edit-flight",
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
  ],

  templateUrl: "./admin-edit-flight.component.html",
  styleUrl: "./admin-edit-flight.component.scss",
})
export class AdminEditFlightComponent {
  flight?: Flight;
  flightForm!: FormGroup;
  destinations_service = inject(DestinationsService);
  flight_service = inject(FlightsService);
  all_flights: Flight[] = [];
  all_destinations: Destination[] = [];
  flights_subscription!: Subscription;
  destionations_subscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.flightForm = this.formBuilder.group(
      {
        // destonation name has to be filled in
        origin: ["", Validators.required],
        destination: ["", Validators.required],
        boarding_date: ["", Validators.required],
        boarding_time: ["", Validators.required],
        arrival_date: ["", Validators.required],
        arrival_time: ["", Validators.required],
        numberOfPassengers: ["", [Validators.required, Validators.min(1), Validators.max(200)]],
        status: [null, Validators.required]
      },
      {
        validators: [
          this.dateLessThan("boarding_date", "arrival_date"),
          this.dateNotInPast("boarding_date"),
          this.dateNotInPast("arrival_date"),
        ],
      }
    );
  }
  ngOnDestroy(): void {
    this.flights_subscription.unsubscribe();
    this.destionations_subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.flights_subscription = this.flight_service.flights.subscribe((flights) => {
      this.all_flights = flights;
      const dest = flights.find((d) => d.flight_id == code); // Find the destination with the matching code
      if (!dest) {
        alert("Destination not found.");
        this.router.navigate(["/admin-manage-destinations"]); // If no destination is found, redirect to the destinations page
        return;
      }
      this.flight = dest;
      const keys = Object.keys(this.flightForm.controls);
      for (let key of keys) {
        this.flightForm.patchValue({
          [key]: (dest as any)[key],
        });
      }
      this.flights_subscription.unsubscribe();
    });
    const code = this.route.snapshot.paramMap.get("flight_id"); // Retrieve the parameter
    if (!code) {
      alert("Invalid flight id provided.");
      this.router.navigate(["/admin-manage-flights"]); // If no code is provided, redirect to the destinations page
      return;
    }

    this.destionations_subscription = this.destinations_service.destinationsData.subscribe(
      (destinations) => {
        this.all_destinations = destinations;
      }
    );
  }

  // Validator to ensure a date is not in the past
  dateNotInPast(controlName: string) {
    return (formGroup: AbstractControl) => {
      const controlValue = formGroup.get(controlName)?.value;
      if (controlValue && new Date(controlValue) < new Date()) {
        formGroup.get(controlName)?.setErrors({ pastDate: true });
      } else {
        formGroup.get(controlName)?.setErrors(null);
      }
    };
  }

  // Validator to ensure boarding date is before arrival date
  dateLessThan(startDate: string, endDate: string) {
    return (formGroup: AbstractControl) => {
      const start = formGroup.get(startDate)?.value;
      const end = formGroup.get(endDate)?.value;
      if (start && end && new Date(start) > new Date(end)) {
        formGroup.get(endDate)?.setErrors({ dateMismatch: true });
      } else {
        formGroup.get(endDate)?.setErrors(null);
      }
    };
  }

  saveChanges() {
    if (this.flightForm.valid) {
      // check boarding date is before arrival date
      if (
        new Date(this.flightForm.value.boarding_date) > new Date(this.flightForm.value.arrival_date)
      ) {
        alert("Boarding date must be before arrival date!");
        return;
      }
      // check that origin and destination are different
      if (this.flightForm.value.origin === this.flightForm.value.destination) {
        alert("Origin and destination must be different!");
        return;
      }
      const destination = this.all_destinations.find(
        (d) => d.destination_name === this.flightForm.value.destination
      );

      this.flight_service.editFlight({
        ...this.flightForm.value,
        flight_id: this.flight?.flight_id,
        image_url: destination?.image_url,
        link: destination?.airport_url,
        airportName: destination?.airport_name,
        airportWebsite: destination?.airport_url,
      });
      alert("Flight changes saved successfully!");
      this.router.navigate(["/admin-manage-flights"]);
    } else {
      // Mark all fields as touched to show validation messages
      this.flightForm.markAllAsTouched();
      alert("Please fill in all required fields before submitting.");
    }
  }
}
