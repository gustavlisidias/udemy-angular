import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { Investiments } from 'src/app/model/investiments';
import { InvestimentsComponent } from './investiments.component';
import { InvestimentsService } from 'src/app/services/investiments.service';
import { MOCK_LIST } from '../../services/investiments.mock';

describe('InvestimentsComponent', () => {
  let component: InvestimentsComponent;
  let fixture: ComponentFixture<InvestimentsComponent>;
  let service: InvestimentsService;

  const mockList: Array<Investiments> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestimentsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentsComponent);
    service = TestBed.inject(InvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toEqual(5);

    expect(component.investiments[0].name).toEqual('Banco 1');
    expect(component.investiments[0].value).toEqual(100);
    expect(component.investiments[4].name).toEqual('Banco 5');
    expect(component.investiments[4].value).toEqual(100);
  });

  it('(I) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');

    expect(investiments.length).toEqual(5);
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 - 100');
    expect(investiments[4].textContent.trim()).toEqual('Banco 5 - 100');
  });
});