import { Component, OnInit } from '@angular/core';

// Models
import { Investiments } from 'src/app/model/investiments';

// Services
import { InvestimentsService } from 'src/app/services/investiments.service';

@Component({
  selector: 'app-investiments',
  templateUrl: './investiments.component.html',
  styleUrls: ['./investiments.component.css']
})

export class InvestimentsComponent implements OnInit {

  public investiments!: Array<Investiments>;

  constructor(private investimentsService: InvestimentsService) {}

  ngOnInit(): void {
    this.investimentsService.list().subscribe((res: any) => (this.investiments = res));
  }

}