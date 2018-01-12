import {PlaylistComponent} from './playlist.component';
import {TestBed, async} from '@angular/core/testing';

describe('playlist component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaylistComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render hello world', () => {
    const fixture = TestBed.createComponent(PlaylistComponent);
    fixture.detectChanges();
    const playlist = fixture.nativeElement;
    expect(playlist.querySelector('h1').textContent).toBe('Hello World!');
  });
});
