import { Component, OnInit } from '@angular/core';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

  markers = [];
  selectedMarker = {};
  
  constructor(private markerService: MarkerService) {
    this.markers = this.markerService.getMarkers();

    this.markerService.selectedMarker.subscribe(v => {
      this.selectedMarker = v
      console.log(this.selectedMarker) 
    });


  }

  ngOnInit(): void {
  }

  selectMarker(marker) {
    this.markerService.selectMarker(marker);
  }
}
