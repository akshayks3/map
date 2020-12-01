import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaMapComponent } from './india-map/india-map.component';
import { StateMapComponent } from './state-map/state-map.component';

const routes: Routes = [{ path: "", component: IndiaMapComponent },{ path: "state/:id", component: StateMapComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
