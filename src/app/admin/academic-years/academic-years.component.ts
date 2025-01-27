import { Component, OnInit } from '@angular/core';
import { AcademicYearService } from '../academic-year.service';

@Component({
  selector: 'app-academic-years',
  templateUrl: './academic-years.component.html',
  styleUrls: ['./academic-years.component.css']
})
export class AcademicYearsComponent implements OnInit {
  academicYears = [];
  displayedColumns: string[] = ['year', 'startDate', 'endDate'];

  constructor(private academicYearService: AcademicYearService) {}

  ngOnInit(): void {
    this.loadAcademicYears();
  }

  loadAcademicYears(): void {
    this.academicYearService.getAcademicYears().subscribe((academicYears) => {
      this.academicYears = academicYears;
    });
  }
}
