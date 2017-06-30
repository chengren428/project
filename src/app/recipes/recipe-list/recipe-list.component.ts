import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'sandwich',
      'a common grilled cheese sandwich',
      'http://assets.bonappetit.com/photos/57acf62a53e63daf11a4dbee/16:9/w_1200,c_limit/best-ever-grilled-cheese.jpg'
    ),
    new Recipe(
      'sandwich',
      'a common grilled cheese sandwich',
      'http://assets.bonappetit.com/photos/57acf62a53e63daf11a4dbee/16:9/w_1200,c_limit/best-ever-grilled-cheese.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
