import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGuardsComponent } from './dashboard-guards.component';

describe('DashboardGuardsComponent', () => {
  let component: DashboardGuardsComponent;
  let fixture: ComponentFixture<DashboardGuardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGuardsComponent]
    });
    fixture = TestBed.createComponent(DashboardGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
