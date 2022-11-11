import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSurveyData() {
    return this.http.get<any>('http://localhost:3000/surveyData');
  }
  saveUserSurvey(data:any) {
    return this.http.post<any>('http://localhost:3000/userSurvey',{data:data});
  }
}
