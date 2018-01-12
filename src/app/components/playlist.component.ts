import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../services/youtube.service';

class Video {
    id: number;
    description: string;
}

@Component({
  template: require('./playlist.component.html')
})
export class PlaylistComponent implements OnInit {

  //channelTitle: string;

  videos: any[];
  selectedVideo: Video;

  //this.router = Router;

  constructor(private router: Router, private dataService: YoutubeService) {

  }

  ngOnInit() {

    //this.router = router;

    this.dataService.getVideos()
      .subscribe(
        data => { this.videos = data.items},
        err => console.error(err),
        () => console.log(this.videos)
      );
        this.videos.map(item => {
            return {
                channelId: item.channelId,
                channelTitle: item.channelTitle
            }
        }).forEach(item => this.videos.push(item));

  }

  loadVideoPage(vid: YoutubeService) {

    //console.log(vid);
    //this.selectedVideo = vid;
    this.router.navigate(['/video-detail', {data: vid}]);

  }
}
