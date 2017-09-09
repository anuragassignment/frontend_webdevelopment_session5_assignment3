import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
