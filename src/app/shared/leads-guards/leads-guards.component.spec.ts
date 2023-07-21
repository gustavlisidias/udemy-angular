import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsGuardsComponent } from './leads-guards.component';

describe('LeadsGuardsComponent', () => {
  let component: LeadsGuardsComponent;
  let fixture: ComponentFixture<LeadsGuardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsGuardsComponent]
    });
    fixture = TestBed.createComponent(LeadsGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
