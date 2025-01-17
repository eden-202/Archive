import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { BookingsService } from "../services/bookings.service";
import { Booking } from "../types";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-user-booking-details",
  imports: [CommonModule, MatCardModule],
  templateUrl: "./user-booking-details.component.html",
  styleUrls: ["./user-booking-details.component.scss"], // Fixed typo in styleUrl -> styleUrls
})
export class UserBookingDetailsComponent implements OnInit, OnDestroy {
  booking?: Booking;
  private bookings_subscription!: Subscription;

  bookings_service = inject(BookingsService);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const bookingId = params.get("booking_id");
      if (!bookingId) {
        alert("Invalid Booking ID provided.");
        this.router.navigate(["/user-manage-bookings"]);
        return;
      }

      this.fetchBookingDetails(bookingId);
    });
  }

  fetchBookingDetails(bookingId: string): void {
    this.bookings_subscription = this.bookings_service.bookings
      .pipe(take(1)) // Automatically unsubscribe after the first value is emitted
      .subscribe((bookings) => {
        const booking = bookings.find((b) => b.booking_id === bookingId);
        if (!booking) {
          alert("Booking not found.");
          this.router.navigate(["/user-manage-bookings"]);
          return;
        }
        this.booking = booking;
      });
  }

  ngOnDestroy(): void {
    if (this.bookings_subscription) {
      this.bookings_subscription.unsubscribe();
    }
  }
}
