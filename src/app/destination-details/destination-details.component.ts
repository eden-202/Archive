import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Destination } from "../types";
import { DestinationsService } from "../services/destinations.service";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-destination-details",
  imports: [RouterModule, CommonModule],
  templateUrl: "./destination-details.component.html",
  styleUrls: ["./destination-details.component.scss"], // Fixed typo: styleUrl -> styleUrls
})
export class DestinationDetailsComponent implements OnInit, OnDestroy {
  destination?: Destination;
  private destinations_subscription!: Subscription;

  destinations_service = inject(DestinationsService);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Use observable for paramMap to handle dynamic route changes
    this.route.paramMap.subscribe((params) => {
      const destinationCode = params.get("destination_code");
      if (!destinationCode) {
        alert("Invalid destination code provided.");
        this.router.navigate(["/admin-manage-destinations"]);
        return;
      }
      this.fetchDestinationDetails(destinationCode);
    });
  }

  fetchDestinationDetails(destinationCode: string): void {
    this.destinations_subscription = this.destinations_service.destinationsData
      .pipe(take(1)) // Automatically unsubscribe after the first value
      .subscribe((destinations) => {
        const destination = destinations.find(
          (d) => d.destination_id === destinationCode
        );
        if (!destination) {
          alert("Destination not found.");
          this.router.navigate(["/admin-manage-destinations"]);
          return;
        }
        this.destination = destination;
      });
  }

  ngOnDestroy(): void {
    if (this.destinations_subscription) {
      this.destinations_subscription.unsubscribe();
    }
  }
}
