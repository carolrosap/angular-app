import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.css']
})
export class RadioButtonGroupComponent implements OnInit {

  elementsArray;
  @Input('elementsArray') set select1(elementsArray) {
    this.elementsArray = elementsArray;
  }

  @Output() returnElement = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onChangeSelection(element) {
    this.returnElement.emit(element);
  }


}
