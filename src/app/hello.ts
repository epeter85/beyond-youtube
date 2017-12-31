import {Component, OnInit} from '@angular/core';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'fountain-app',
  template: require('./hello.html')
})
export class HelloComponent implements OnInit {
  public hello: string;
  videos: any[];

  constructor(private dataService: YoutubeService) {}

  ngOnInit() {

    this.dataService.getVideos()
      .subscribe(data => {
        this.videos = data.items;
        console.log(this.videos);
      });

  }
}
