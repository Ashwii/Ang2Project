import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

const myRoutes : Routes = [
   {
   path: 'color',
   component: ColorComponent
   } ,
   {
   path:'table',
   component: TableComponent
   }
]
@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    HomeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
    RouterModule.forRoot(myRoutes)  
  ]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
