import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../DataSharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  newDataValue = { name: 'John', age: 30, address: 'address job usa vp' };
  newDataKey = 'user';

  constructor(private dataSharingService: DataSharingService) {}

  async ngOnInit() {}
  shareNewData() {
    this.dataSharingService
      .shareData(this.newDataKey, this.newDataValue)
      .subscribe(
        (response) => {
          console.log('Shared data successfully:', response);
        },
        (error) => {
          console.error('Error sharing data:', error);
        }
      );
  }
}
