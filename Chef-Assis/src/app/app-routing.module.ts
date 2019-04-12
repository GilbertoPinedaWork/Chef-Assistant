import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientManagerComponent } from './components/ingredient-manager/ingredient-manager.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HeaderComponent } from './components/header/header.component';
import { RecetasComponent } from './components/recetas/recetas.component';

const routes: Routes = [
{ path: 'header', component:HeaderComponent},
{ path: '',redirectTo: '/header', pathMatch: 'full' },
{ path: 'ingredients', component: IngredientManagerComponent},
{ path: 'employees', component: EmployeesComponent},
{ path: 'recipes', component: RecetasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HeaderComponent, IngredientManagerComponent, EmployeesComponent, RecetasComponent]
