import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interface
import { FoodList } from '../model/food-list';

@Injectable({
  providedIn: 'root'
})

export class FoodListService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public emitEvent = new EventEmitter();
  private apiFoodList: string = "http://localhost:3000/list-food";

  constructor(private http: HttpClient) { }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(this.apiFoodList).pipe(
      res => res, 
      error => error
    );
  }

  public foodListAdd(newFood: string): Observable<Array<FoodList>> {
    return this.http.post<Array<FoodList>>(this.apiFoodList, {food: newFood}, this.httpOptions).pipe(
      res => res,
      error => error
    );
  }

  public foodListEdit(id: number, newFood: string): Observable<Array<FoodList>> {
    return this.http.put<Array<FoodList>>(`${this.apiFoodList}/${id}`, {food: newFood}).pipe(
      res => res,
      error => error
    );
  }

  public foodListDelete(id: number): Observable<Array<FoodList>> {
    return this.http.delete<Array<FoodList>>(`${this.apiFoodList}/${id}`).pipe(
      res => res,
      error => error
    );
  }

  public foodListAlert(value: Array<FoodList>) {
    return this.emitEvent.emit(value);
  }
}
