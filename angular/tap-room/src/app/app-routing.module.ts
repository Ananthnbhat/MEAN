import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatronComponent } from './patron/patron.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'patron', component: PatronComponent },
  { path: '', component: HomeComponent },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
