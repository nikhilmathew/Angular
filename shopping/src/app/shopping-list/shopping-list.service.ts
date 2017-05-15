
import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from "@angular/core";
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>(); 
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 100),
        new Ingredient('Orange', 50)
    ];

    getIngredients() {
        return this.ingredients.slice();//return copy
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    addIngredients(ingredients :Ingredient[]){
        // for( let ingredient of ingredients){
            // this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}