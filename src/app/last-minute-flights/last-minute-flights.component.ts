import { Component, inject } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { FlightsService } from "../services/flights.service";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { filter, map } from "rxjs";

@Component({
  selector: "app-last-minute-flights",
  imports: [CommonModule, MatCardModule, MatTableModule, RouterModule, MatIconModule],
  templateUrl: "./last-minute-flights.component.html",
  styleUrl: "./last-minute-flights.component.scss",
})
export class LastMinuteFlightsComponent {
  displayedColumns: string[] = [
    "flight_id",
    "origin",
    "destination",
    "boarding_date",
    "boarding_time",
    "arrival_date",
    "arrival_time",
    "book",
  ];
  flights_service = inject(FlightsService);

  last_minute_flights = this.flights_service.flights.pipe(
    map((flights) => flights.filter((f) => new Date(f.boarding_date) >= new Date()))
  );
  flights = this.flights_service.flights;
}
