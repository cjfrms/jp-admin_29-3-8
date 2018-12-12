import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ScheduleManagementComponent } from './schedule-management/schedule-management.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild([{
      path: '',
      component: ScheduleManagementComponent,
      data: {
        breadcrumb: 'Display Name'
      }
    }]),
  ],
  declarations: [ScheduleManagementComponent]
})
export class ScheduleModule { }
