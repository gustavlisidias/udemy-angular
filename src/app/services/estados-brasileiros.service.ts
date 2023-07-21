import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface
import { EstadosBrasileiros } from '../model/estados-brasileiros';


@Injectable({
  providedIn: 'root'
})
export class EstadosBrasileirosService {
  private apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) { }

  getEstados(): Observable<EstadosBrasileiros[]> {
    return this.http.get<EstadosBrasileiros[]>(this.apiUrl);
  }
}
