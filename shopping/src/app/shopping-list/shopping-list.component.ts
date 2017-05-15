import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]
  // =[
  //   new Ingredient('Apple',100),
  //   new Ingredient('Orange',50)
  // ];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients= this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients :Ingredient[]) =>{
        this.ingredients = ingredients;

      }
    )
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }
}
