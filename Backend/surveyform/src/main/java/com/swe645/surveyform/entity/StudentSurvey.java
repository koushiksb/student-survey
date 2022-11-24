package com.swe645.surveyform.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class StudentSurvey {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reportId", unique = true, nullable = false)
	int reportId;
	String userName;
	String address;
	String city;
	String state;
	int zip;
	int telephone;
	String email;
	@JsonFormat(pattern="yyyy-MM-dd")
	LocalDate dateOfSurvey;
	String likes;
	String interests;
	String rating;
	String willRecommend;
	String comments;
	public int getReportId() {
		return reportId;
	}
	public void setReportId(int reportId) {
		this.reportId = reportId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getZip() {
		return zip;
	}
	public void setZip(int zip) {
		this.zip = zip;
	}
	public int getTelephone() {
		return telephone;
	}
	public void setTelephone(int telephone) {
		this.telephone = telephone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@JsonFormat(pattern="yyyy-MM-dd")
	public LocalDate getDateOfSurvey() {
		return dateOfSurvey;
	}
	public void setDateOfSurvey(LocalDate dateOfSurvey) {
		this.dateOfSurvey = dateOfSurvey;
	}
	public String getLikes() {
		return likes;
	}
	public void setLikes(String likes) {
		this.likes = likes;
	}
	public String getInterests() {
		return interests;
	}
	public void setInterests(String interests) {
		this.interests = interests;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getWillRecommend() {
		return willRecommend;
	}
	public void setWillRecommend(String willRecommend) {
		this.willRecommend = willRecommend;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	

	
	
}
