import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})

export class RecipePage implements OnInit {
  recipe: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getAllRecipe();
  }

  showDetail(recipeId: string){
    console.log(this.recipeService.getRecipe(recipeId));
  }
}
