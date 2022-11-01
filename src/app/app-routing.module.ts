import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeChangeComponent } from './employee/employee-change/employee-change.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch:"full"},  //Always your first route

  {path: "empl/list", component:EmployeeListComponent},
  {path: "empl/create", component:EmployeeCreateComponent},
  {path: "empl/detail/:id", component:EmployeeDetailComponent},
  {path: "empl/change/:id", component:EmployeeChangeComponent},
  {path: "empl/delete/:id", component:EmployeeDeleteComponent},
  {path:"empl/login", component:EmployeeLoginComponent},
  {path:"home", component: HomeComponent}, 
  {path:"about", component: AboutComponent},

  {path:"**", component: E404Component}   //Always your last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
