import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookFlightFormComponent } from './user-book-flight-form.component';

describe('UserBookFlightFormComponent', () => {
  let component: UserBookFlightFormComponent;
  let fixture: ComponentFixture<UserBookFlightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookFlightFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookFlightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
