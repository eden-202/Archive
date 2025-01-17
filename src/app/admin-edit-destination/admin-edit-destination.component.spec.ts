import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDestinationComponent } from './admin-edit-destination.component';

describe('AdminEditDestinationComponent', () => {
  let component: AdminEditDestinationComponent;
  let fixture: ComponentFixture<AdminEditDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditDestinationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
