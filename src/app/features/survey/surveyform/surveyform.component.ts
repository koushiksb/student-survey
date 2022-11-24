import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/survey-api/api.service';

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
    willRecommend: '',
    comments: ''
  });
  checkArray: FormArray = this.surveyForm.get('likes') as FormArray;
  constructor(
    private formBuilder: FormBuilder, 
    public router: Router,
    private api: ApiService) {}

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
    var payLoad:any = {};
    Object.keys(this.surveyForm.controls).forEach(key => {
      if(this.surveyForm != null){
        if(key == "likes"){
          payLoad[key] = JSON.stringify(this.surveyForm.get(key)?.value)
        }else{
          payLoad[key] = this.surveyForm.get(key)?.value
        }
      }
    });
    console.log("payLoad: ", payLoad) 
    this.api.saveUserSurvey(payLoad).subscribe(()=>{
      console.log("saved successfully: ")
      this.router.navigate(['/'])
    })
  }
}
