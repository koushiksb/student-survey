package com.swe645.surveyform.repository;

import org.springframework.data.repository.CrudRepository;

import com.swe645.surveyform.entity.StudentSurvey;

public interface SurveyFormRepository extends CrudRepository<StudentSurvey, Integer>{

}
