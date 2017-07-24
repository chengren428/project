import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sandwich',
      'a common grilled cheese sandwich',
      'http://assets.bonappetit.com/photos/57acf62a53e63daf11a4dbee/16:9/w_1200,c_limit/best-ever-grilled-cheese.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Cheese', 4)
      ]
    ),
    new Recipe(
      'PB&J',
      'a common PB&J sandwich',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Peanut-Butter-Jelly-Sandwich.png/1200px-Peanut-Butter-Jelly-Sandwich.png',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Peanut Butter', 1),
        new Ingredient('Jelly', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // Using .slice() to return a copy of the recipe instead of direct reference
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
