import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SurveyComponent } from './survey/survey.component';
import { SurveyformComponent } from './survey/surveyform/surveyform.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { SurveyarchievesComponent } from './survey/surveyarchieves/surveyarchieves.component';

@NgModule({
  declarations: [SurveyComponent, SurveyformComponent, SurveyarchievesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ]
})
export class FeaturesModule {}
