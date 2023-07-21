import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';

import { SharedModule } from './shared/shared.module';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

//Curso: Rotas
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { Page404Component } from './pages/page404/page404.component';
import { TestesUnitariosComponent } from './testes-unitarios/testes-unitarios.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    
    DataBindingComponent,
    DiretivasAtributosComponent,
    DiretivasEstruturaisComponent,
    
    FormsComponent,
    ReactiveFormsComponent,

    HomeComponent,
    SobreComponent,
    Page404Component,
    TestesUnitariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
