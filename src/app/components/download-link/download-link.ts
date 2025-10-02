import { Component, input } from '@angular/core';

@Component({
  selector: 'app-download-link',
  imports: [],
  templateUrl: './download-link.html',
  styleUrl: './download-link.scss'
})
export class DownloadLink {
  downloadLabel = input.required<string>();
  filePath = input.required<string>();
  fileName = input<string>("fileName.txt");
}
