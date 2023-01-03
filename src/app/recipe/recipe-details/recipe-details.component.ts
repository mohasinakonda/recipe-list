import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  @Input() recipeitem: any;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
