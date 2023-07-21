import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InvestimentsComponent } from '../investiments/investiments.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, InvestimentsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Meu component foi criado?
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Tenho 10 reais na minha poupança?
  it(`(U) getPoupanca(): should have poupanca = 10`, () => {
    expect(component.getPoupanca).toEqual(10);
  });

  // Tenho 50 reais na minha carteira?
  it(`(U) getCarteira(): should have carteira = 50`, () => {
    expect(component.getCarteira).toEqual(50);
  });

  // Se eu sacar 10 reais, minha poupança fica com 0 e minha carteira com 60?
  it(`(U) setSacar(): should transfer poupanca from carteira`, () => {
    component.setSacar('10');
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  // Se eu depositar 50 reais, minha poupança fica com 60 e minha carteira com 0?
  it(`(U) setDepositar(): should transfer carteira from poupanca`, () => {
    component.setDepositar('50');
    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  // Testando IF Statement do metodo setSacar()
  it(`(U) setSacar(): should transfer poupaca dont have string (isNaN) or poupaca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy(); // Não pode ser string
    expect(component.setSacar('20')).not.toBeTruthy(); // Não posso sacar mais do que tenho
    expect(component.getPoupanca).toEqual(10); // Tenho que continuar tendo 10 reais na poupanca
    expect(component.getCarteira).toEqual(50); // Tenho que continuar tendo 50 reais na carteira
  });

  // Testando IF Statement do metodo setDepositar()
  it(`(U) setDepositar(): should transfer carteira dont have string (isNaN) or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy(); // Não pode ser string
    expect(component.setDepositar('100')).not.toBeTruthy(); // Não posso depositar mais do que tenho
    expect(component.getPoupanca).toEqual(10); // Tenho que continuar tendo 10 reais na poupanca
    expect(component.getCarteira).toEqual(50); // Tenho que continuar tendo 50 reais na carteira
  });

  // Teste de tela do metodo setSacar()
  it(`(I) setSacar(): should transfer poupanca from carteira`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-carteira').textContent).toEqual('60');
  });

  // Teste de tela do metodo setDepositar()
  it(`(I) setDepositar(): should transfer carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
  });
});