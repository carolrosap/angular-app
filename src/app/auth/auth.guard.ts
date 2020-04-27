import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private autenticationService: AutenticationService,
        private router: Router,
    ) { }

    canActivate(): Observable<boolean> | boolean {
        if (this.autenticationService.checkToken()) {
            return true;
        } else {
          // tslint:disable-next-line:quotemark
          console.log("usuário não autorizado");
          // this.router.navigate(['/access-denied']);

        }
    }
}
