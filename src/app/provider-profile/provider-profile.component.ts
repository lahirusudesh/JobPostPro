import { Component, OnInit } from '@angular/core';
import { JobPostService } from '../shared/sevices/job-post.service';
import { JobPost } from '../shared/models/jobpost.model';
@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent implements OnInit {

  postedJobsList: Array<any>;
  jobProviderId = '1';
  constructor(private jobPostService: JobPostService) { }

  ngOnInit() {
    this.jobPostService.getPostedJobsById(this.jobProviderId).subscribe(data => {
      this.postedJobsList = data;
    });
  }

}
