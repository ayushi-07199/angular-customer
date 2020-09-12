import { Component, OnInit } from '@angular/core';
import { Customer } from '../utils/customer';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor() { }

  customers:Customer[]=[
    new Customer("Ayushi",5000),
    new Customer("Muskan",10000),
    new Customer("Bhanu",8000)
  ];
}
