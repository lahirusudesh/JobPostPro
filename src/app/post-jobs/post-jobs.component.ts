import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { JobPostService } from '../shared/sevices/job-post.service';
import { JobTypeService } from '../shared/sevices/job-type.service';
import { JobPost } from '../shared/models/jobpost.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})
export class PostJobsComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  jobPost: JobPost = new JobPost();
  jobtypes = new FormControl();
  jobtypeList: Array<any>;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private jobPostService: JobPostService, private jobTypeService: JobTypeService,private _formBuilder: FormBuilder) { }

  
  ngOnInit() {
      this.jobTypeService.getAllJobTypes().subscribe(data => {
        this.jobtypeList = data;
      });
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
  
  }
  createJobPost(): void {
    this.jobPostService.createJobPost(this.jobPost).subscribe(data =>{
      alert("Job Post Sent.")
    });
  };
  
}
