import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { JobPostService } from 'src/app/shared/sevices/job-post.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  selectedFile:File = null;
  uploadedFiles: Array<any>;
  constructor(private http: HttpClient,private jobPostService: JobPostService){
    
  }
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append("file", this.selectedFile);
    this.jobPostService.getAll().subscribe(data => {
      this.uploadedFiles = data;
    });
    this.http.post('http://localhost:8080/doc/upload',fd)
    .subscribe(res => {
      console.log(res);
      console.log("Success!!");
    });
   
  }
}
