import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipe', pathMatch: 'full' },
  { 
    path: 'recipe', 
    children: [
      {
        path: '',
        loadChildren: './recipe/recipe.module#RecipePageModule' 
      },
      { 
        path: ':recipeId', 
        loadChildren: './recipe-detail/recipe-detail.module#RecipeDetailPageModule' 
      }
]}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
