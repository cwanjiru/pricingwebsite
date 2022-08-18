import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports:[
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    TabsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
