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

  surveyData: surveyDataElement[] = [
    {
      reportId: 1,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 2,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 3,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 4,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 5,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 6,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 7,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 8,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 9,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 10,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 11,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 12,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 13,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 14,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 15,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 16,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 17,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 18,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 19,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    },
    {
      reportId: 20,
      userName: 'Hydrogen',
      city: 'Fairfax',
      state: 'VA',
      address: 'lol',
      zip: '22030',
      phone: '5712016812',
      email: 'ksurabha@gmu.edu',
      dateOfSurvey: '10-03-2022',
      likes: 'friends',
      interests: 'television',
      rating: 'likely',
      values: '1,2,3,4,5,6,7,8,9,10',
      comments: 'aesrdthnsbavcshdhbsv'
    }
  ];
  emptysurveyData: surveyDataElement[] = [];
  surveyColumns: string[] = [
    'Id',
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
    'Values',
    'Comments'
  ];
  dataSource: MatTableDataSource<surveyDataElement> = new MatTableDataSource<surveyDataElement>(this.emptysurveyData);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<surveyDataElement>(this.surveyData);
    this.api.getSurveyData().subscribe((data:any)=>{
      console.log(data)
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
  zip: string;
  phone: string;
  email: string;
  dateOfSurvey: string;
  likes: string;
  interests: string;
  rating: string;
  values: string;
  comments: string;
}