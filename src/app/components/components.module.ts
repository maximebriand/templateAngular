import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.routing';
import { NotfoundComponent } from './error-pages/notfound/notfound.component';
import { UnauthorizedComponent } from './error-pages/unauthorized/unauthorized.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    NotfoundComponent,
    UnauthorizedComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  providers: [],
})
export class ComponentModule { }

