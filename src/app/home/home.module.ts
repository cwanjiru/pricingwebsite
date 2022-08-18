import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    PricingComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports:[
    PricingComponent,
  
  ]
})
export class HomeModule { }
