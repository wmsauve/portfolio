import { Component, input, OnInit, signal } from '@angular/core';
import { VideoTextPos, VideoType } from '../../../model/defs.type';
import { UrlSanitizerPipe } from '../../pipes/url-sanitizer-pipe';

@Component({
  selector: 'app-stdvid',
  imports: [ UrlSanitizerPipe ],
  templateUrl: './stdvid.html',
  styleUrl: './stdvid.scss'
})
export class Stdvid implements OnInit {

  vidDefs = VideoType;

  fileName = input.required<string>();
  textPos = input.required<VideoTextPos>();
  vidType = input<VideoType>(VideoType.Imported);
  textContent = input.required<string>();

  textColumn = signal<string>("");

  ngOnInit(): void {
    switch(this.textPos().valueOf()){
      case VideoTextPos.Left:
        this.textColumn.set("text-left");
        break;
      default:
          break;
    }
  } 
}
