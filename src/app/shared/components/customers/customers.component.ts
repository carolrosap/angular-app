import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  // objetos genéricos para o componente genérico
  types = [
    { name: 'Documentário', isSelected: false, isDisabled: false, value: 2, id: 'opt-radio-3' },
    { name: 'Filme', isSelected: false, isDisabled: false, value: 0, id: 'opt-radio-1' },
    { name: 'Livro', isSelected: false, isDisabled: false, value: 1, id: 'opt-radio-2' },
    { name: 'Música', isSelected: true, isDisabled: false, value: null, id: 'opt-radio-4' },
    { name: 'Série', isSelected: true, isDisabled: false, value: null, id: 'opt-radio-5' },
    { name: 'Outro', isSelected: true, isDisabled: false, value: null, id: 'opt-radio-6' }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  selectType(type) {
    console.log('type: ', type);
  }

  login() {
    this.router.navigate(['login']);
  }
}
