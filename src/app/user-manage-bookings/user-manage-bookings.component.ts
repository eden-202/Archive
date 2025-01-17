import { Component, inject } from "@angular/core";
import { BookingsService } from "../services/bookings.service";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { map, Observable } from "rxjs";
import { Booking } from "../types";

@Component({
  selector: "app-user-manage-bookings",
  imports: [MatTableModule, RouterModule, MatIconModule, RouterModule],
  templateUrl: "./user-manage-bookings.component.html",
  styleUrl: "./user-manage-bookings.component.scss",
})
export class UserManageBookingsComponent {
  bookings_service = inject(BookingsService);
  displayedColumns: string[] = ["destination_image", "flight_details"];
  upcoming_bookings: Observable<Booking[]> = this.bookings_service.bookings.pipe(
    map((bookings) => {
      return bookings.filter((b) => new Date(b.flight.boarding_date) >= new Date());
    })
  );

  past_bookings: Observable<Booking[]> = this.bookings_service.bookings.pipe(
    map((bookings) => {
      return bookings.filter((b) => new Date(b.flight.boarding_date) < new Date());
    })
  );
}
