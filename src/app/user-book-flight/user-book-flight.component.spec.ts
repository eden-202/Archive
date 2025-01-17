import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookFlightComponent } from './user-book-flight.component';

describe('UserBookFlightComponent', () => {
  let component: UserBookFlightComponent;
  let fixture: ComponentFixture<UserBookFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookFlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
