import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';

// // Define the routes
// const routes: Routes = [
//     {
//         path: 'employees',
//         children: [
//             { path: '', component: ListEmployeesComponent },
//             { path: 'create', component: CreateEmployeeComponent },
//             { path: 'edit/:id', component: CreateEmployeeComponent },
//         ]
//     },
//   ];

  const routes: Routes = [
    { path: '', component: ListEmployeesComponent },
    { path: 'create', component: CreateEmployeeComponent },
    { path: 'edit/:id', component: CreateEmployeeComponent },
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EmployeeRoutingModule { }