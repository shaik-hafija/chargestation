import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeComponent } from './bike/bike.component';
import { GetlocationComponent } from './getlocation/getlocation.component';

const routes: Routes = [
  {
    path:'bike',
    component:BikeComponent
  },
  {
    path:'getlocation',
    component:GetlocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
