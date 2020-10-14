import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
	{ path: 'Contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
