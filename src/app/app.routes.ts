import { Routes } from '@angular/router';
//import {Component} from '@angular/core';
//import {RouterModule, Routes} from '@angular/router';
import {PlaylistComponent} from './components/playlist.component';
import {VideoComponent} from './components/video.component';
//import { ErrorComponent} from './error.component'

/*@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}*/

/*export const routes: Routes = [
  { path: '', component: PlaylistComponent },
  { path:'video', component: VideoComponent}
];*/

export const appRoutes: Routes = [
  { path: '', redirectTo: '/video-list', pathMatch: 'full' },
  { path: 'video-list', component: PlaylistComponent },
  { path: 'video-detail', component: VideoComponent, data : {video : 'some value'} }

  //,
  //{ path: '**', component: ErrorComponent }
];

//export const routing = RouterModule.forRoot(routes);
