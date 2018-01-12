import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';

@Component({
  template: require('./video.component.html')
})
export class VideoComponent implements OnInit {

  videoID: string;
  //hero: Hero;
  //sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.videoID = route.snapshot.params['id'];
    /*this.sub = this.route
      .data
      .subscribe(v => console.log(v));*/


    //console.log()
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

}
