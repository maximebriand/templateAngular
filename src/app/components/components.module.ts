import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.module';
import { NotfoundComponent } from './error-pages/notfound/notfound.component';
import { UnauthorizedComponent } from './error-pages/unauthorized/unauthorized.component';




@NgModule({
  declarations: [
    NotfoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  providers: [],
})
export class ComponentModule { }

