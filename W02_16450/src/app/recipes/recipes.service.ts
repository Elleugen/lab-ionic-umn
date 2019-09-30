import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'gado-gado',
      imageUrl: 'https://cdn.idntimes.com/content-images/community/2018/04/big-slider-gado-gado-enak-dan-lezat-d15989179c334422677c80293a7b51c0_600x400.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://cdn.idntimes.com/content-images/post/20190502/c22eb92d2d3738702fb0434e339cfbca-1-b9b0ec35aa17b97860c72fe047cd216d_600x400.jpg',
      ingredients: ['Beras', 'Air Putih', 'Garam', 'Daun Pandan', 'Anyaman Ketupat']
    },
    {
      id: 'r3',
      title: 'Pizza Margherita',
      imageUrl: 'https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg',
      ingredients: ['Tepung', 'keju', 'Saus', 'Sosis']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];}

    getRecipe(recipeId: string) {
      return {
        ...this.recipes.find(recipe => {
          return recipe.id === recipeId;
        })
      };
    }
  
    deleteRecipe(recipeId: string) {
      for (var i = 0; i < this.recipes.length; i++) {
          if (this.recipes[i].id == recipeId) this.recipes.splice(i, 1);
        }
    }   
  }
}
