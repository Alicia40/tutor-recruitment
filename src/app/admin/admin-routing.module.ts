import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageAdsComponent } from './manage-ads/manage-ads.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { AcademicYearsComponent } from './academic-years/academic-years.component';
import { SearchCandidatesComponent } from './search-candidates/search-candidates.component';

const routes: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'manage-ads', component: ManageAdsComponent },
  { path: 'candidate-list', component: CandidateListComponent },
  { path: 'review-application', component: ReviewApplicationComponent },
  { path: 'academic-years', component: AcademicYearsComponent },
  { path: 'search-candidates', component: SearchCandidatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
