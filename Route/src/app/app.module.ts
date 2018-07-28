import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentNameComponent } from './student-name/student-name.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomeComponent } from './home/home.component';

const myRoute : Routes = [
    {
      path : 'home',
      component:HomeComponent
    },
    {
      path :'studentName',
      component:StudentNameComponent
    },
    {
      path : 'studentDetails',
      component : StudentDetailsComponent
    },
    {
      path : ' ',
      redirectTo : 'home',
      pathMatch : 'full'
    }
  ]
@NgModule({
  declarations: [
    AppComponent,
    StudentNameComponent,
    StudentDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
