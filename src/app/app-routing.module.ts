import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnavailableServiceComponent } from './shared/components/unavailable-service/unavailable-service.component';
import { CustomersComponent } from './shared/components/customers/customers.component';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [
  { path: 'customers', component: CustomersComponent, pathMatch: 'full' },
  { path: 'unavailable-service', component: UnavailableServiceComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'customers', pathMatch: 'full' },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
