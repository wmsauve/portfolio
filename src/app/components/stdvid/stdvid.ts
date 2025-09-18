import { Component, input, OnInit, signal } from '@angular/core';
import { VideoTextPos } from '../../../model/defs.type';

@Component({
  selector: 'app-stdvid',
  imports: [],
  templateUrl: './stdvid.html',
  styleUrl: './stdvid.scss'
})
export class Stdvid implements OnInit {
  fileName = input.required<string>();
  textPos = input.required<VideoTextPos>();
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
