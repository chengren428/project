import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipesService } from "app/recipes/recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {}
  
  onAddToShoppingList() {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
