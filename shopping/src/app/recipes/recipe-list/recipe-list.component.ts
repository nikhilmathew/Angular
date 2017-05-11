import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'bla bla bla', 'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2016/10/18160841/best-chole-bhature-in-mumbai.jpg?fit=1600%2C993'),
    new Recipe('ANother Test Recipe', 'bla bla bla', 'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2016/10/18160841/best-chole-bhature-in-mumbai.jpg?fit=1600%2C993'),
    new Recipe('A test recipe', 'bla bla bla', 'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2016/10/18160841/best-chole-bhature-in-mumbai.jpg?fit=1600%2C993')
  ]
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }
}
