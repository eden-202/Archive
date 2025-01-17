import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageDestinationsComponent } from './admin-manage-destinations.component';

describe('AdminManageDestinationsComponent', () => {
  let component: AdminManageDestinationsComponent;
  let fixture: ComponentFixture<AdminManageDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageDestinationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
