import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-search-candidates',
  templateUrl: './search-candidates.component.html',
  styleUrls: ['./search-candidates.component.css']
})
export class SearchCandidatesComponent implements OnInit {
  searchQuery: string = '';
  filteredCandidates = [];
  displayedColumns: string[] = ['name', 'email'];

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {}

  searchCandidates(): void {
    this.candidateService.searchCandidates(this.searchQuery).subscribe((candidates) => {
      this.filteredCandidates = candidates;
    });
  }
}
