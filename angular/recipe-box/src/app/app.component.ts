import { Component } from '@angular/core';
import { Recipe } from "./models/recipe.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipes:Recipe[] = [
new Recipe('Sandkich',['bread','butter','veggies'],['cut the bread','put veggies and butter inside','put the bread together']),
new Recipe('Burjer',['bread','butter','veggies'],['Prepare the paddy','prepare the veggies and cheese','put\'em together']),
new Recipe('Friez',['potato','oil','fire'],['cut the potato','make correct shape with them','fry \'em in the oil']),
  ];
}
