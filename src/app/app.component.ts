import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer-model';
import { CustomersService } from './services/customers-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CustomersService]
})
export class AppComponent implements OnInit{
  title = 'clientes: ';
  constructor(private customersService: CustomersService){ }

  ngOnInit(){
    this.getCustomers();
  }

  getCustomers(){
    this.customersService.getCustomers().subscribe((result: Customer[]) => {
      console.log('clientes: ', result);
    });
  }


}
