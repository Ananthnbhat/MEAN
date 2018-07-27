import { Component, OnInit } from '@angular/core';
import { Keg } from "../models/keg.model";
import { KegsService } from "../kegs.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  kegs: Keg[];
  getKegs(): void {
    this.kegsService.getKegs()
      .subscribe(kegs => this.kegs = kegs);
  }


  selectedKeg = null;
  editThisKeg = null;

  kegDetails(currentKeg) {
    this.selectedKeg = currentKeg;
  }

  editKegDetails(keg) {
    this.selectedKeg = null;
    this.editThisKeg = keg;
  }

  saveKegDetails(keg) {
    this.selectedKeg = keg;
    this.editThisKeg = null;
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
  decreasedPint(selectedKeg: Keg) {
    selectedKeg.pints -= 1;

  }

  constructor(private kegsService: KegsService) { }

  ngOnInit() {
    this.getKegs();
  }

}
