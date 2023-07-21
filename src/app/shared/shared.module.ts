import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { MenuComponent } from './menu/menu.component';
import { BankingComponent } from './banking/banking.component';
import { InvestimentsComponent } from './investiments/investiments.component';
import { HomeGuardsComponent } from './home-guards/home-guards.component';
import { AccountGuardsComponent } from './account-guards/account-guards.component';
import { LeadsGuardsComponent } from './leads-guards/leads-guards.component';
import { DashboardGuardsComponent } from './dashboard-guards/dashboard-guards.component';

@NgModule({
  declarations: [
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
    MenuComponent,
    BankingComponent,
    InvestimentsComponent,
    HomeGuardsComponent,
    AccountGuardsComponent,
    LeadsGuardsComponent,
    DashboardGuardsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
    MenuComponent,
    BankingComponent,
    InvestimentsComponent,
    HomeGuardsComponent,
    AccountGuardsComponent,
    LeadsGuardsComponent,
    DashboardGuardsComponent,
  ]
})

export class SharedModule { }
