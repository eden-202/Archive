import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { FlightsService } from "../services/flights.service";
import { DestinationsService } from "../services/destinations.service";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatOptionModule } from "@angular/material/core";
import { Destination, Flight } from "../types";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BehaviorSubject, Subscription } from "rxjs";
import { AdminManageDestinationsComponent } from "../admin-manage-destinations/admin-manage-destinations.component";
import { MatFormFieldControl, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

const isSameDate = (date1: string, date2: Date): boolean => { 
  const d1 = new Date(date1);
  return d1.getFullYear() === date2.getFullYear() && d1.getMonth() === date2.getMonth() && d1.getDate() === date2.getDate();
}
@Component({
  selector: "app-user-book-flight",
  imports: [
    MatTableModule,
    RouterModule,
    MatIconModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatOptionModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
],
  templateUrl: "./user-book-flight.component.html",
  styleUrl: "./user-book-flight.component.scss",
})
export class UserBookFlightComponent implements OnInit, OnDestroy {
  flights_service = inject(FlightsService);
  filter_origin: string | null = null;
  filter_destination: string | null = null;

  filter_boarding_date: Date | null = null 
  filter_lading_date: Date | null = null 
  filter_passengers: number | null = null
  destinations_service = inject(DestinationsService);
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

  filtered_flights: Flight[] = [];
  all_flights: Flight[] = [];
  all_destinations: Destination[] = [];

  flightsSubscription!: Subscription;
  destinationsSubscription!: Subscription;
  ngOnInit(): void {
    this.flightsSubscription = this.flights_service.flights.subscribe((flights) => {
      this.all_flights = flights;
      this.filtered_flights = [...flights]; // Initialize the table with all flights
    });

    this.destinationsSubscription = this.destinations_service.destinationsData.subscribe(
      (destinations) => {
        this.all_destinations = destinations;
      }
    );
  }

  ngOnDestroy(): void {
    this.flightsSubscription.unsubscribe();
    this.destinationsSubscription.unsubscribe();
  }

  filterFlights(): void {
    this.filtered_flights = this.all_flights.filter((f) => {
      return (
        (!this.filter_origin || f.origin === this.filter_origin) &&
        (!this.filter_destination || f.destination === this.filter_destination) &&
        (!this.filter_boarding_date || isSameDate(f.boarding_date,this.filter_boarding_date)) &&
        (!this.filter_lading_date || isSameDate(f.arrival_date,this.filter_lading_date)) &&
        (!this.filter_passengers || f.numberOfPassengers >= this.filter_passengers)
      );
    });
  }


  filterBoardingDate(date: Date): void {
    this.filter_boarding_date = date;
    this.filterFlights(); // Reapply the filters
  }
  filterLandingDate(date: Date): void {
    this.filter_lading_date = date;
    this.filterFlights(); // Reapply the filters
  }
  filterPassengers(event:Event): void {
    const passnegers= (event.target as HTMLInputElement).value;
    this.filter_passengers = passnegers ? parseInt(passnegers) : null;
    this.filterFlights() // Reapply the filters
  }
  filterOrigin(origin: Destination): void {
    this.filter_origin = origin.destination_name;
    this.filterFlights(); // Reapply the filters
  }

  filterDestination(destination: Destination): void {
    this.filter_destination = destination.destination_name;
    this.filterFlights(); // Reapply the filters
  }
  showAll(): void {
    this.filter_origin = null;
    this.filter_destination = null;
    this.filtered_flights = [...this.all_flights];
  }
}
