import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGuardsComponent } from './home-guards.component';

describe('HomeGuardsComponent', () => {
  let component: HomeGuardsComponent;
  let fixture: ComponentFixture<HomeGuardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGuardsComponent]
    });
    fixture = TestBed.createComponent(HomeGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
