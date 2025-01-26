// src/app/admin/manage-ads.component.ts
import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-manage-ads',
  templateUrl: './manage-ads.component.html',
})
export class ManageAdsComponent implements OnInit {
  ads: any[] = [];
  
  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAds();
  }

  getAds() {
    this.adminService.getAds().subscribe(
      (data) => {
        this.ads = data;
      },
      (error) => console.error('Error fetching ads', error)
    );
  }

  deleteAd(adId: number) {
    this.adminService.deleteAd(adId).subscribe(
      () => this.getAds(),
      (error) => console.error('Error deleting ad', error)
    );
  }
}
