import { Component, OnInit } from '@angular/core';
import { UserService} from 'src/app/auth/user-service';
import { User } from 'src/app/models/user-module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = null;
  password: string = null;
  flgUsuarioEncontrado = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.userService.getUsers().subscribe((result: User[]) => {
      // this.checkUser(result);
      console.log('result: ', result);
    });
  }
  setUser(user: string) {
    this.user = user;
  }

  setPassword(password: string) {
    this.password = password;
  }

  checkUser(users: User[]) {
    let flg = false;
    users.forEach(u => {
      if (u.user === this.user && u.password === this.password) {
        console.log('user: ', u.user);
        console.log('password: ', u.password);
        this.flgUsuarioEncontrado = true;
        sessionStorage.setItem('token', u.token);
        sessionStorage.setItem('user', u.user);
        flg = true;
        window.location.href = 'indications';
      }
    });
    if (!flg) {
      console.log('user: ', this.user);
      console.log('password: ', this.password);
      this.router.navigate(['access-denied']);
    }
  }

  saveUser() {
    const newUser = {
      id: null, user: this.user, password: this.password, token: 'jokeirpjw94pfn439f3f'
    };
    this.userService.saveUser(newUser).subscribe((result: User) => {
      sessionStorage.setItem('token', result.token);
      sessionStorage.setItem('user', result.user);
      window.location.href = 'indications';
    });
  }

}
