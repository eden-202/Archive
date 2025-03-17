import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DestinationsService } from '../services/destinations.service';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Destination } from '../types';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-manage-destinations',
  imports: [MatTableModule, RouterModule, MatIconModule, CommonModule],
  templateUrl: './admin-manage-destinations.component.html',
  styleUrl: './admin-manage-destinations.component.scss',
})
export class AdminManageDestinationsComponent  {
  displayedColumns: string[] = [
    'destination_code',
    'destination_name',
    'airport_name',
    'airport_url',
    'actions',
  ];
  destinations_service = inject(DestinationsService);
}
