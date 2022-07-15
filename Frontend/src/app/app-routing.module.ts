import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterPageComponent } from './filter-page/filter-page.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'filter', pathMatch: 'full'},
  {path: 'filter', component: FilterPageComponent},
  // {path: 'auth', component: AuthFormComponent},
  {path: 'search', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
