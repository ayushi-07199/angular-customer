import { Component, OnInit } from '@angular/core';
import { Customer } from '../utils/customer';

@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  constructor() { }

  customer:Customer=new Customer("Ayushi",77777);

  

  

 
}
