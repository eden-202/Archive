import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule, MatFormField } from "@angular/material/form-field";
import { MatInputModule, MatInput } from "@angular/material/input";
import { DestinationsService } from "../services/destinations.service";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Destination } from "../types";
import { Subscription } from "rxjs";

@Component({
  selector: "app-admin-add-destination",
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterModule, CommonModule],
  templateUrl: "./admin-add-destination.component.html",
  styleUrl: "./admin-add-destination.component.scss",
})
export class AdminAddDestinationComponent implements OnInit, OnDestroy {
  destinationForm!: FormGroup;

  destination_service = inject(DestinationsService);
  all_destinations: Destination[] = [];
  destinations_subscription!: Subscription;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.destinationForm = this.formBuilder.group({
      // destonation name has to be filled in
      destination_name: ["", Validators.required],
      airport_name: ["", Validators.required],
      airport_url: ["", [Validators.required, Validators.pattern("https?://.+")]],
      image_url: ["", [Validators.required, Validators.pattern("https?://.+")]],
    });
  }
  ngOnDestroy(): void {
    this.destinations_subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.destinations_subscription = this.destination_service.destinationsData.subscribe(
      (destinations) => {
        this.all_destinations = destinations;
        
      }
    );
  }

  addDestination() {
    if (this.destinationForm.valid) {
      this.destination_service.addDestination({
        ...this.destinationForm.value,
        destination_code: "", // from firebase
      });
      alert("Destination added successfully!");
      this.router.navigate(["/admin-manage-destinations"]);
    } else {
      // Mark all fields as touched to show validation messages
      this.destinationForm.markAllAsTouched();
      alert("Please fill in all required fields before submitting.");
    }
  }
}
