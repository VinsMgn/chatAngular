import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponentComponent } from './display/display-component.component';


const Approutes: Routes = [
  { path:  'login', component: DisplayComponentComponent},
  { path: 'channels/:id', component: DisplayComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
