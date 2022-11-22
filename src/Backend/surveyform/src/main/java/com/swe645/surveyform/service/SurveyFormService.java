package com.swe645.surveyform.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swe645.surveyform.entity.StudentSurvey;
import com.swe645.surveyform.repository.SurveyFormRepository;

@Service
public class SurveyFormService {
	
	@Autowired
	SurveyFormRepository surveyFormRepository;
	
	public void addSurvey(StudentSurvey studentSurvey) {
		System.out.println("date: "+studentSurvey.getDateOfSurvey());
		System.out.println("email: "+studentSurvey.getEmail());
		surveyFormRepository.save(studentSurvey);
		
	}
	
	public List<StudentSurvey> getSurveys() {
		return (List<StudentSurvey>) surveyFormRepository.findAll();
		
	}
	
}
