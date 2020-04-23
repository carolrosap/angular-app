import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnavailableServiceComponent } from './components/unavailable-service/unavailable-service.component';
import { CustomersComponent } from './components/customers/customers.component';
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [

    UnavailableServiceComponent,

    CustomersComponent,

    RadioButtonGroupComponent

  ],
  exports: [
    UnavailableServiceComponent,
    RadioButtonGroupComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
