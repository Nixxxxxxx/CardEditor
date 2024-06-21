import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    document.body.className = "selector";
  }

  ngOnDestroy(){
    document.body.className="";
  }

  state : any;
  showVideo: boolean = true; // Control the video display
  showTitle: boolean = false; // Initially hide the title

  videoEnded() {
    this.showVideo = false; // Hide the video when playback ends
    this.showTitle = true; // Show the title when playback ends
  }
}
