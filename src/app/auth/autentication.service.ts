import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor() { }

  checkToken(): boolean {
    let status = false;
    const token = sessionStorage.getItem('token');
    if (token !== null) {
        status = true;
    }
    return status;
  }

}
