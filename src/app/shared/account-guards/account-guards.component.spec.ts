import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGuardsComponent } from './account-guards.component';

describe('AccountGuardsComponent', () => {
  let component: AccountGuardsComponent;
  let fixture: ComponentFixture<AccountGuardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountGuardsComponent]
    });
    fixture = TestBed.createComponent(AccountGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
