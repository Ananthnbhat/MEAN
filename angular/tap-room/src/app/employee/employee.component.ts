import { Component, OnInit} from '@angular/core';
import { Keg } from "../models/keg.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  kegs: Keg[] = [
    new Keg("Bud Light Platinum", "Anheuser-Busch", 8, "High", 124),
    new Keg("Budweiser", "Anheuser-Busch", 4, "Low", 8),
    new Keg("Asahi", "Asahi Breweries, Ltd", 5, "Medium", 124),
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

  countPints(pints) {
    if (pints <= 10) return true;
    else return false;
  }
  decreasedPint(selectedKeg:Keg){
  selectedKeg.pints -= 1;
  
  }

  constructor() { }

  ngOnInit() {
  }

}
