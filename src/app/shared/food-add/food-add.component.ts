import { Component } from '@angular/core';

// Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html'
})

export class FoodAddComponent {  
  constructor (private foodListService: FoodListService) {}

  public listAddItem(value: string) {
    return this.foodListService.foodListAdd(value).subscribe({
      next: (res) => this.foodListService.foodListAlert(res),
      error: err => err
    });
  }

}
