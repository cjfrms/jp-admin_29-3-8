import { NgModule } from '@angular/core';
import { IframeComponent } from './iframe.component';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule
 /*   RouterModule.forChild([{
      path: '',
      outlet: 'cont',
      component: IframeComponent
    }]),*/
  ],
  declarations: [IframeComponent],
})
export class IframeModule { }
