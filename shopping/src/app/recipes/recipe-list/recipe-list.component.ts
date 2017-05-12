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
    new Recipe('Chole Bhature', 'bla bla bla', 'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2016/10/18160841/best-chole-bhature-in-mumbai.jpg?fit=1600%2C993'),
    new Recipe('Tiramisu', 'bla bla bla', 'https://i.ytimg.com/vi/x5E70W40KNI/maxresdefault.jpg'),
    new Recipe('Belgium Waffles', 'bla bla bla', 'http://cdn.pcwallart.com/images/belgian-waffles-with-ice-cream-wallpaper-4.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }
}
