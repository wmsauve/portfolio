import { Component, input } from '@angular/core';

@Component({
  selector: 'app-std-header-text',
  imports: [],
  templateUrl: './std-header-text.html',
  styleUrl: './std-header-text.scss'
})
export class StdHeaderText {
  headerText = input.required<string>();
}
