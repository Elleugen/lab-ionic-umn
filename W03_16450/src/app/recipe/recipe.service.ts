import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private recipe: Recipe[] = [
    { 
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2016/12/Resep-Gado-Gado.jpg?fit=2461%2C2359&ssl=1',
      ingredients: ['Lontong', 'Sawi', 'Kecap', 'Toge']
    },
    { 
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://cdn.idntimes.com/content-images/post/20190502/c22eb92d2d3738702fb0434e339cfbca-1-b9b0ec35aa17b97860c72fe047cd216d_600x400.jpg',
      ingredients: ['Beras']
    },
    { 
      id: 'r3',
      title: 'Pizza Margherita',
      imageUrl: 'https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg',
      ingredients: ['Tepung', 'Minyak Zaitun', 'Keju', 'Garam']
    }
  ];

  constructor() { }

  getAllRecipe(){
    return [...this.recipe];
  }

  getRecipe(recipeId: string){
    return{
      ...this.recipe.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipe = this.recipe.filter(recipe => {
      return recipe.id === recipeId;
    });
  }
}
