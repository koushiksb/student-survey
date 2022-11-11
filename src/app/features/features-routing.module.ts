import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { SurveyarchievesComponent } from './survey/surveyarchieves/surveyarchieves.component';
import { SurveyformComponent } from './survey/surveyform/surveyform.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyComponent
  },
  {
    path: 'surveyform',
    component: SurveyformComponent
  },
  {
    path: 'surveyarchieves',
    component: SurveyarchievesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
