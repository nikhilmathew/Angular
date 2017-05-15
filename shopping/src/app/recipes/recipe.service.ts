import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe(
            'Chole Bhature',
            'bla bla bla',
            'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2016/10/18160841/best-chole-bhature-in-mumbai.jpg?fit=1600%2C993',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Sugar', 4)
            ]),
        new Recipe(
            'Tiramisu',
            'bla bla bla',
            'https://i.ytimg.com/vi/x5E70W40KNI/maxresdefault.jpg',
            [
                new Ingredient('Coffee', 2),
                new Ingredient('Flour', 10),
                new Ingredient('Chocolate', 8)
            ]),
        new Recipe(
            'Belgium Waffles',
            'bla bla bla',
            'http://cdn.pcwallart.com/images/belgian-waffles-with-ice-cream-wallpaper-4.jpg',
            [
                new Ingredient('Waffles', 2),
                new Ingredient('Chocolate', 10)
            ])
    ]
    constructor(private slService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();//returns a copy
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}