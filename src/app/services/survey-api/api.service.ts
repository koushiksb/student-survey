import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSurveyData() {
    return this.http.get<any>('https://ec2-44-204-221-168.compute-1.amazonaws.com/k8s/clusters/c-bwm5z/api/v1/namespaces/default/services/http:assign3-final-dep:9090/proxy/surveyForms');
  }
  saveUserSurvey(data:any) {
    return this.http.post<any>('https://ec2-44-204-221-168.compute-1.amazonaws.com/k8s/clusters/c-bwm5z/api/v1/namespaces/default/services/http:assign3-final-dep:9090/proxy/surveyForms',data);
  }
}
