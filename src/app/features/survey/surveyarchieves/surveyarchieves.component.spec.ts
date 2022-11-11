import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyarchievesComponent } from './surveyarchieves.component';

describe('SurveyarchievesComponent', () => {
  let component: SurveyarchievesComponent;
  let fixture: ComponentFixture<SurveyarchievesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyarchievesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyarchievesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
