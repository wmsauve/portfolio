import { Component, input, OnInit, signal } from '@angular/core';
import { VideoTextPos } from '../../../model/defs.type';

@Component({
  selector: 'app-stdimg',
  imports: [],
  templateUrl: './stdimg.html',
  styleUrl: './stdimg.scss'
})
export class Stdimg {
  imageSrc = input.required<string>();
  imageHeight = input.required<number>();
  imageWidth =  input.required<number>();

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
