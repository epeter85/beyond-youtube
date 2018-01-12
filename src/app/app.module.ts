import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {routing, RootComponent} from './routes';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { PlaylistComponent } from './components/playlist.component';
import { VideoComponent } from './components/video.component';
//import { ErrorComponent} from './error.component'

import { YoutubeService } from './services/youtube.service';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    //RootComponent,
    AppComponent,
    PlaylistComponent,
    VideoComponent
  ],
  providers: [YoutubeService],
  //bootstrap: [RootComponent]
  bootstrap: [AppComponent]
})
export class AppModule {}
