import {
  Component,
  ViewChild,
  Input,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent {
  @ViewChild('ingredientName', { static: true }) ingredient: ElementRef;
  @ViewChild('amount', { static: true }) amount: ElementRef;

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('tomato', 15),
  ];
  onAddIngredient() {
    const name = this.ingredient.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    this.ingredients.push(new Ingredient(name, amount));
  }
}
