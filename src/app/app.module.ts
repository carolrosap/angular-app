import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptor } from './auth/interceptor.module';
import { SharedModule } from './shared/shared.module';
import { AutenticationService } from './auth/autentication.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Interceptor,
    SharedModule
  ],
  providers: [
    AutenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
