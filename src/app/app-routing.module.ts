import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './core/tabs/tabs.component';

import { HomeComponent } from './home/home.component';
import { PricingComponent } from './home/pricing/pricing.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pricing',component:PricingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
