import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReservationComponent} from "./components/reservation/reservation.component";
import {ResourceComponent} from "./components/resource/resource.component";

const routes: Routes = [
  {path:"reservation",component:ReservationComponent,data:{roles:["ADMIN"]}},
  {path:"resource",component:ResourceComponent,data:{roles:["ADMIN"]}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
