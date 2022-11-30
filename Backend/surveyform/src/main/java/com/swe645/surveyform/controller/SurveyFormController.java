package com.swe645.surveyform.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.swe645.surveyform.entity.StudentSurvey;
import com.swe645.surveyform.service.SurveyFormService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/surveyForms")
public class SurveyFormController {
	
	@GetMapping("/hello-world")
	public String helloworld() {
		return "Hello World!";
	}
	
	@Autowired
	private SurveyFormService surveyFormService;

	/**
	 * This function gets the list of all surveys present in the student_survey database
	 * @return List of Student Surveys
	 */
    @RequestMapping(method = RequestMethod.GET)
    public Collection<StudentSurvey> getAllSurveys(){
        return surveyFormService.getSurveys();
    }
    
    /**
     * This function inserts the Student Survey into the database
     * @param studentSurvey - in JSON format and this gets deserialized using the fasterxml.jackson library
     */
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void addSurvey(@RequestBody StudentSurvey studentSurvey){
        surveyFormService.addSurvey(studentSurvey);
    }
    
    
}
