import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatronComponent } from './patron/patron.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { KegsService } from './kegs.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';

// const appRoutes: Routes = [
//   { path: 'employee', component: EmployeeComponent },
//   { path: 'patron', component: PatronComponent },
//   {path: '', component: HomeComponent },
// ];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatronComponent,
    EmployeeComponent,
    NotFoundComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [KegsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
