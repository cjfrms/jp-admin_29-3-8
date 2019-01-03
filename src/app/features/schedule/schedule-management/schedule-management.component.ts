import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.css']
})
export class ScheduleManagementComponent implements OnInit {

  dataSet ;
  isVisible = false;
  validateForm: FormGroup;
  schedule: Schedule = new Schedule();

  submitForm = ($event, value) => {
    // $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
    console.log("xxxxx");
    this.createCustomer();
  }

  constructor(private scheduleService: ScheduleService, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      jobGroup: [ '', [ Validators.required ]],
      jobName   : [ '', [ Validators.required ] ],
      jobClassName: [ '', [ Validators.required ] ],
      cronExpression : [ '', [ Validators.required ] ],
      desc : [ '', [ Validators.required ] ]
    });

  }

  ngOnInit() {
    this.scheduleService.getScheduleList().subscribe(data => {

      // cache our list
      this.dataSet = data;
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  cancelModalWin(): void {
    this.isVisible = false;
  }

  createCustomer(): void {
    this.scheduleService.createSchedule(this.schedule).subscribe(data => console.log(data), error => console.log(error));
  }


}
