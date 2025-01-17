import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageFlightsComponent } from './admin-manage-flights.component';

describe('AdminManageFlightsComponent', () => {
  let component: AdminManageFlightsComponent;
  let fixture: ComponentFixture<AdminManageFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageFlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
