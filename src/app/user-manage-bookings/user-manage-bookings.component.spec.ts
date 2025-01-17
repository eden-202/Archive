import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageBookingsComponent } from './user-manage-bookings.component';

describe('UserManageBookingsComponent', () => {
  let component: UserManageBookingsComponent;
  let fixture: ComponentFixture<UserManageBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManageBookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManageBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
