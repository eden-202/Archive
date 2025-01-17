import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { Flight } from "../types";
import { FlightsService } from "../services/flights.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-flight-details",
  imports: [CommonModule],
  templateUrl: "./flight-details.component.html",
  styleUrls: ["./flight-details.component.scss"], // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class FlightDetailsComponent implements OnInit, OnDestroy {
  flight?: Flight;
  private flights_subscription!: Subscription;

  flight_service = inject(FlightsService);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Use observable for paramMap to handle dynamic route changes
    this.route.paramMap.subscribe((params) => {
      const flightId = params.get("flight_id");
      if (!flightId) {
        alert("Invalid flight ID provided.");
        this.router.navigate(["/admin-manage-flights"]);
        return;
      }
      this.fetchFlightDetails(flightId);
    });
  }

  fetchFlightDetails(flightId: string): void {
    this.flights_subscription = this.flight_service.flights
      .pipe(take(1)) // Automatically unsubscribe after the first value
      .subscribe((flights) => {
        const flight = flights.find((f) => f.flight_id === flightId);
        if (!flight) {
          alert("Flight not found.");
          this.router.navigate(["/admin-manage-flights"]);
          return;
        }
        this.flight = flight;
      });
  }

  ngOnDestroy(): void {
    if (this.flights_subscription) {
      this.flights_subscription.unsubscribe();
    }
  }
}
