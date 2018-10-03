import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobPost } from '../models/jobpost.model'
import { Observable } from 'rxjs';

@Injectable()
export class JobPostService {

  constructor(private http: HttpClient) { }
  public createJobPost(jobpost){
    return this.http.post<JobPost>('http://localhost:8080',jobpost);
  }
  getPostedJobsById(id: string): Observable<any> {
    return this.http.get('http://localhost:8080/all/jobs/user/'+id);
  }
}
