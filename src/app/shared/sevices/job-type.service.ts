import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobTypeService {

  constructor(private http: HttpClient) { }
  
  public getAllJobTypes(): Observable<any> {

    return this.http.get('http://localhost:8080/allJobTypes');
    
  }
}
