import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ScheduleManagementComponent
    }]),
  ],
  declarations: [ScheduleManagementComponent]
})
export class ScheduleModule { }
