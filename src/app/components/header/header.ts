import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {
  title = signal("William Sauvé");

  isMenuOpen = false;

  toggleMenu(event: Event) {
    this.isMenuOpen = !this.isMenuOpen;
    const el = event.target as HTMLElement;
    el.classList.remove("animatePulse"); 
    void el.offsetWidth;              
    el.classList.add("animatePulse");

    const menu = document.getElementById("links") as HTMLElement;
    if (menu) {
      menu.classList.remove("slideInMenu"); 
      menu.classList.remove("slideOutMenu");
      void menu.offsetWidth;
      if (this.isMenuOpen) {
        menu.classList.add("slideInMenu");
      }
      else{
        menu.classList.add("slideOutMenu");
      }
    }
  }
}