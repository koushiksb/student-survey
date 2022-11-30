package com.swe645.surveyform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.swe645.surveyform.entity.StudentSurvey;

public interface SurveyFormRepository extends JpaRepository<StudentSurvey, Integer>{

}
