import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../shared/template/header.component';
import { AlertModule } from './alert/alert.module';



@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AlertModule,
        HttpClientModule
    ],
    exports: [
        HeaderComponent,
        RouterModule,
        AlertModule
    ],
    providers: [],
})
export class SharedModule { }

