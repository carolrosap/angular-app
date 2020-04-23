import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer} from '../models/Customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url = 'http://localhost:3000/Customers'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Obtem todas as indicações
  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url);
  }

  // Obtem uma indicação pelo id
  // getCustomerById(id: number): Observable<Customer> {
  //  return this.httpClient.get<Customer>(this.url + '/' + id);
  // }

   // salvar indicacao
   // updateCustomer(customer: Customer): Observable<Customer> {
   // return this.httpClient.put<Customer>(this.url + '/' + customer.id, JSON.stringify(customer), this.httpOptions);
  // }

}


