import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.css']
})
export class ScheduleManagementComponent implements OnInit {

  dataSet ;
  isVisible = false;
  validateForm: FormGroup;

  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
    console.log(value);
  }

  constructor(private scheduleService: ScheduleService, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: [ '', [ Validators.required ]]
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


}
