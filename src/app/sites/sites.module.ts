import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { DefaultComponent } from './default/default.component';
import {RouterModule} from "@angular/router";
import {SafePipe} from "../safe.pipe";
@NgModule({
  declarations: [
    PreviewComponent,
    DefaultComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SafePipe
  ],
})
export class SitesModule { }
