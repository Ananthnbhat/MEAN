import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatronComponent } from './patron/patron.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { KegsService } from './kegs.service';

const appRoutes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'patron', component: PatronComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatronComponent,
    EmployeeComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [KegsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
