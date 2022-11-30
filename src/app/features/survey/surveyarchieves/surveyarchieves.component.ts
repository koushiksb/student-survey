import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/survey-api/api.service';


@Component({
  selector: 'app-surveyarchieves',
  templateUrl: './surveyarchieves.component.html',
  styleUrls: ['./surveyarchieves.component.scss']
})
export class SurveyarchievesComponent implements OnInit {


  emptysurveyData: surveyDataElement[] = [];
  surveyColumns: string[] = [
    'reportId',
    'User Name',
    'Address',
    'City',
    'State',
    'Zip',
    'Phone',
    'E-mail',
    'Likes',
    'Interests',
    'Date of Survey',
    'Ratings',
    'Will Recommend',
    'Comments'
  ];
  dataSource: MatTableDataSource<surveyDataElement> = new MatTableDataSource<surveyDataElement>(this.emptysurveyData);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getSurveyData().subscribe((data:any)=>{
      console.log(data)
      this.dataSource = new MatTableDataSource<surveyDataElement>(data);
    })
  }
  
  ngAfterViewInit() {
    if (this.dataSource) this.dataSource.paginator = this.paginator;
  }
}

export interface surveyDataElement {
  reportId: number;
  userName: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  telephone: number;
  email: string;
  dateOfSurvey: string;
  likes: string;
  interests: string;
  rating: string;
  willRecommend: string;
  comments: string;
}