import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { SurveyformComponent } from './survey/surveyform/surveyform.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyComponent
  },
  {
    path: 'surveyfrom',
    component: SurveyformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
