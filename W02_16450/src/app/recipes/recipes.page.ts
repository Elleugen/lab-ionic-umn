import { RecipesService } from "./recipes.service";
import { Recipe } from "./recipes.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private RecipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.RecipesService.getAllRecipes();
  }

  showDetail(recipeId: string) {
    console.log(this.RecipesService.getRecipe(recipeId));
  }
}
