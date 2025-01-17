import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { DestinationsService } from "../services/destinations.service";
import { Destination } from "../types";
import { Subscription } from "rxjs";
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: "app-admin-edit-destination",
  imports: [ReactiveFormsModule,MatRadioModule, MatFormFieldModule, MatInputModule, RouterModule, CommonModule],

  templateUrl: "./admin-edit-destination.component.html",
  styleUrl: "./admin-edit-destination.component.scss",
})
export class AdminEditDestinationComponent {
  destination?: Destination;
  destinationForm!: FormGroup;
  destination_service = inject(DestinationsService);
  all_destinations: Destination[] = [];
  destinations_subscription!: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.destinationForm = this.formBuilder.group({
      // destonation name has to be filled in
      destination_name: ["", Validators.required],
      airport_name: ["", Validators.required],
      airport_url: ["", [Validators.required, Validators.pattern("https?://.+")]],
      image_url: ["", [Validators.required, Validators.pattern("https?://.+")]],
      status: [null, Validators.required]
    });
  }
  ngOnDestroy(): void {
    this.destinations_subscription.unsubscribe();
  }
  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get("destination_id"); // Retrieve the parameter
    if (!code) {
      alert("Invalid destination code provided.");
      this.router.navigate(["/admin-manage-destinations"]); // If no code is provided, redirect to the destinations page
      return;
    }
    this.destinations_subscription = this.destination_service.destinationsData.subscribe(
      (destinations) => {
        this.all_destinations = destinations;
        const dest = destinations.find((d) => d.destination_id == code); // Find the destination with the matching code
        if (!dest) {
          alert("Destination not found.");
          this.router.navigate(["/admin-manage-destinations"]); // If no destination is found, redirect to the destinations page
          return;
        }
        this.destination = dest;
        const keys = Object.keys(this.destinationForm.controls);
        for (let key of keys) {
          this.destinationForm.patchValue({
            [key]: (dest as any)[key],
          });
        }
        this.destinations_subscription.unsubscribe();
      }
    );
  }

  saveChanges() {
    if (this.destinationForm.valid) {
      this.destination_service.editDestination({
        destination_id: this.destination?.destination_id,
        ...this.destinationForm.value,
      });
      alert("Destination changes saved successfully!");
      this.router.navigate(["/admin-manage-destinations"]);
    } else {
      // Mark all fields as touched to show validation messages
      this.destinationForm.markAllAsTouched();
      alert("Please fill in all required fields before submitting.");
    }
  }
}
