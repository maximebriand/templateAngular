import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../shared/template/header.component';
import { AlertModule } from './alert/alert.module';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
    declarations: [
        HeaderComponent,
        LoaderComponent
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
        AlertModule,
        LoaderComponent
    ],
    providers: [],
})
export class SharedModule { }

