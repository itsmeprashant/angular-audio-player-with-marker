import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { StreamState } from '../../interfaces/stream-state';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  state: StreamState;
  //url: string = '../../../assets/file_example.mp3';
  url: string = '../../../assets/file1.mp3'
  markers: any = [];
  totalAudioTime: number = 132;
  selectedMarker: any = {};
  
  constructor(private audioService: AudioService, private markerService: MarkerService) {
    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
      this.markers = this.markerService.getMarkers().map((marker) => ({
        ...marker,
        left: (marker.time/this.state.duration) * 100
      }));
    });
    this.audioService.playStream(this.url).subscribe((events) => {
      // listening
    });

    // calculate marker's position
   


    this.markerService.selectedMarker.subscribe(v => {
      this.selectedMarker = v;
      this.audioService.seekTo(this.selectedMarker.time);
      this.audioService.play();
    });
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  next() {
    
  }

  previous() {
    
  }

  selectMarker(marker) {
    this.markerService.selectMarker(marker);
  }

  onSliderChangeEnd(change) {
    console.log({change})
    this.audioService.seekTo(change.value);
  }
}
