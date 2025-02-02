import { Component, Input } from '@angular/core';
import { VideoItem } from './video-item';
/*d:thumbsComponentUse*/
import { Thumbs } from '../thumbs/thumbs.component'; /*d:videoComponentCreateSolved/trimTrailing*/
/*/d*/ @Component({
  selector: 'my-video',
  templateUrl: './video.component.html'
})
/*/d*/
export class VideoComponent {
  /*d:videoComponentCreateSolved/trimBoth*/
  @Input() video: VideoItem; /*d:thumbsComponentUseSolved/trimTrailing*/
  /*/d*/ onThumbs(thumbs: Thumbs) {
    if (thumbs === Thumbs.UP) {
      this.video.likes++;
    }
    if (thumbs === Thumbs.DOWN) {
      this.video.likes--;
    }
  }
  /*/d*/
}
