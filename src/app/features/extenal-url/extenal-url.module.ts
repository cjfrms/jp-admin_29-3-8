import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtenalUrlComponent } from './extenal-url.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{
      path: '',
      component: ExtenalUrlComponent
    }]),
  ],
  declarations: [ExtenalUrlComponent]
})
export class ExtenalUrlModule { }
