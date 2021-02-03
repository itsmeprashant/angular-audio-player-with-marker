import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  private markers = [
    {
      time: 60,
      text: 'Hello'
    },
    {
      time: 62,
      text: 'Hello'
    },
    {
      time: 99,
      text: 'Hello'
    }
  ];


  selectedMarker = new Subject(); 

  constructor() { }

  public getMarkers = () => this.markers;

  public selectMarker = (marker) => this.selectedMarker.next(marker);

}
