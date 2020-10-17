import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
import {FormComponent} from './form/form.component'
const routes: Routes = [
	{ path: 'contact', component: ContactusComponent},
	{ path: 'form', component: FormComponent},
	{ path: '**', redirectTo: '/contact', pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
