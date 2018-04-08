import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BlueComponent } from './blue/blue.component';
import { GreenComponent } from './green/green.component';
import { PinkComponent } from './pink/pink.component';


@NgModule({
  declarations: [
    AppComponent,
    BlueComponent,
    GreenComponent,
    PinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
