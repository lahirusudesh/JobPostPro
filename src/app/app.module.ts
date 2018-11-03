import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule,MatCardModule,MatStepperModule,MatSelectModule,MatButtonModule, MatCheckboxModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostJobsComponent } from './post-jobs/post-jobs.component';
import { JobPostService } from './shared/sevices/job-post.service';
import { JobTypeService } from './shared/sevices/job-type.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';

const appRoutes: Routes = [
  {path:'post-job',component:PostJobsComponent},
  {path:'provider-profile',component:ProviderProfileComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    PostJobsComponent,
    MyNavComponent,
    ProviderProfileComponent,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    NgbModule.forRoot(),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [JobPostService,JobTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
