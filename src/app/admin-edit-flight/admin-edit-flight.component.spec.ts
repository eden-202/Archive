import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditFlightComponent } from './admin-edit-flight.component';

describe('AdminEditFlightComponent', () => {
  let component: AdminEditFlightComponent;
  let fixture: ComponentFixture<AdminEditFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditFlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
