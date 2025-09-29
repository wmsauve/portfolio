import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-of-links',
  imports: [],
  templateUrl: './list-of-links.html',
  styleUrl: './list-of-links.scss'
})
export class ListOfLinks {
  firstText = input.required<string>();
  secondText = input.required<string>();
  secondLink = input<string | null>(null);
}
