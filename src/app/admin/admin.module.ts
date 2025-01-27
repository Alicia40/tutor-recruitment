import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageAdsComponent } from './manage-ads/manage-ads.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { AcademicYearsComponent } from './academic-years/academic-years.component';
import { SearchCandidatesComponent } from './search-candidates/search-candidates.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AdminHomeComponent,
    ManageAdsComponent,
    CandidateListComponent,
    ReviewApplicationComponent,
    AcademicYearsComponent,
    SearchCandidatesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class AdminModule { }
