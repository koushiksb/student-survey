import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.scss']
})
export class SurveyformComponent implements OnInit {
  surveyForm = this.formBuilder.group({
    userName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    dateOfSurvey: '',
    likes: this.formBuilder.array([]),
    interests: '',
    rating: '',
    values: '',
    comments: ''
  });
  checkArray: FormArray = this.surveyForm.get('likes') as FormArray;
  constructor(private formBuilder: FormBuilder, public router: Router) {}

  ngOnInit(): void {}

  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.checkArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      this.checkArray.controls.forEach(item => {
        if (item.value == event.target.value) {
          this.checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    console.log(this.surveyForm.value);
  }
}
