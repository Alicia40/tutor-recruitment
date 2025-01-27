import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-manage-ads',
  templateUrl: './manage-ads.component.html',
  styleUrls: ['./manage-ads.component.css']
})
export class ManageAdsComponent implements OnInit {
  ads = [];
  displayedColumns: string[] = ['title', 'description', 'actions'];

  constructor(private adService: AdService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAds();
  }

  loadAds(): void {
    this.adService.getAds().subscribe((ads) => {
      this.ads = ads;
    });
  }

  openCreateDialog(): void {
    // Logic to open dialog for creating a new ad
  }

  editAd(ad): void {
    // Logic to edit the selected ad
  }

  deleteAd(ad): void {
    // Logic to delete the selected ad
  }
}
