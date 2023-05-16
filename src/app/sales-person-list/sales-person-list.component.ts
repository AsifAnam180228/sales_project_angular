import {Component, OnInit} from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit{
  //create an array of objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Asif", "Anam", "asifanam@gmail.com", 4000 ),
    new SalesPerson("Ruhit", "Arman", "ruhit@gmail.com", 2000),
    new SalesPerson("Asif", "Shaon", "shaon@gmail.com", 5000),
    new SalesPerson("Shaon", "Anam", "anam@gmail.com", 2500)
    ];

  constructor() {
  }
  ngOnInit() {

  }
}
