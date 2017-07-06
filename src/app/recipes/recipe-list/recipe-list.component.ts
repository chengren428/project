import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeSelect = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Sandwich',
      'a common grilled cheese sandwich',
      'http://assets.bonappetit.com/photos/57acf62a53e63daf11a4dbee/16:9/w_1200,c_limit/best-ever-grilled-cheese.jpg'
    ),
    new Recipe(
      'PB&J',
      'a common PB&J sandwich',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Peanut-Butter-Jelly-Sandwich.png/1200px-Peanut-Butter-Jelly-Sandwich.png'
    )
  ];

  onSelectRecipe(selection: Recipe) {
    this.recipeSelect.emit(selection);
  }
}
