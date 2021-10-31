import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingService } from './custom-preloading.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'employees',
    data: {preload: true, delay: 1000 },
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
