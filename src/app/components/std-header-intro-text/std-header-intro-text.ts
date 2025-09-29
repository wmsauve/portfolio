import { Component, input } from '@angular/core';

@Component({
  selector: 'app-std-header-intro-text',
  imports: [],
  templateUrl: './std-header-intro-text.html',
  styleUrl: './std-header-intro-text.scss'
})
export class StdHeaderIntroText {
  headerText = input.required<string>();
  introText = input.required<string>();
  overrideWidth = input<number>(600);
}
