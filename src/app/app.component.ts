import { Component } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService],
})
export class AppComponent {
  title = 'first_angular_project3';
}
