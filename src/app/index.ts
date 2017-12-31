import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {HttpModule} from '@angular/http';
import {HelloComponent} from './hello';

import { YoutubeService } from './services/youtube.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent
  ],
  providers: [YoutubeService],
  bootstrap: [RootComponent]
})
export class AppModule {}
