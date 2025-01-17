import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-admin-manage-flights',
  imports: [MatTableModule, RouterModule, MatIconModule],
  templateUrl: './admin-manage-flights.component.html',
  styleUrl: './admin-manage-flights.component.scss',
})
export class AdminManageFlightsComponent {
  displayedColumns: string[] = [
    'flight_id',
    'origin',
    'destination',
    'boarding_date',
    'boarding_time',
    'arrival_date',
    'arrival_time',
    'actions',
  ];
  flights_service = inject(FlightsService);

  public get flights() {
    return this.flights_service.flights;
  }
}
