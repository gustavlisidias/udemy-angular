import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesUnitariosComponent } from './testes-unitarios.component';

describe('TestesUnitariosComponent', () => {
  let component: TestesUnitariosComponent;
  let fixture: ComponentFixture<TestesUnitariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestesUnitariosComponent]
    });
    fixture = TestBed.createComponent(TestesUnitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render paragraph', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('works');
  });

  it('Função soma()', () => {
    expect(component.soma(1, 1)).toEqual(2);
    expect(component.soma(5, -1)).not.toEqual(6);
    expect(component.soma(10, 5)).toEqual(15);
  });
});
