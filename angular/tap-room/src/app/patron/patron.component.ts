import { Component, OnInit } from '@angular/core';
import { Keg } from "../models/keg.model";

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent implements OnInit {

 kegs: Keg[] = [
    new Keg("Bud Light Platinum", "Anheuser-Busch", 8, "High", 124),
    new Keg("Budweiser", "Anheuser-Busch", 4, "Low", 124),
    new Keg("Asahi", "Asahi Breweries, Ltd", 5, "Medium", 124)
  ];
 
  

  selectedKeg = null;

  kegDetails(currentKeg) {
    this.selectedKeg = currentKeg;
  }

  priorityColor(currentKeg) {
    if (currentKeg.price === 5) {
      return "mediumPriced";
    } else if (currentKeg.price < 5) {
      return "lessPriced";
    } else {
      return "highPriced";
    }
  }

  getColor(alcoholContent) {
    switch (alcoholContent) {
      case 'Low':
        return '#ccffcc';
      case 'Medium':
        return '#fff3e6';
      case 'High':
        return '#ffdab3';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
