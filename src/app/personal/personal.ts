import { Component, signal } from '@angular/core';
import { StdHeaderIntroText } from '../components/std-header-intro-text/std-header-intro-text';
import { StdHeaderText } from '../components/std-header-text/std-header-text';
import { Stdimg } from '../components/stdimg/stdimg';
import { VideoTextPos } from '../../model/defs.type';
import { ListOfLinks } from '../components/list-of-links/list-of-links';

@Component({
  selector: 'app-personal',
  imports: [StdHeaderIntroText, Stdimg, StdHeaderText, ListOfLinks],
  templateUrl: './personal.html',
  styleUrl: './personal.scss'
})
export class Personal {
  VideoFormat = VideoTextPos; 
  contactText = signal<string>("Public Repository Link");

  titleOne = signal<string>("Games");
  
  headerOne = signal<string>("Unity/node.js/.NET/MongoDB (C#/TS) - Gwent Clone (Indefinitely Postponed)");
  introOne = signal<string>("This was a fullstack set up I was working on because, at the time, most of my main friend group and I were playing through the Witcher 3 and I wanted to make a multiplayer version of the minigame Gwent. I figured it would be fun if we all played Gwent against each other. The game was going to be downloadable via a launcher. I was going to make a website that could track silly user statistics. Finally, I had plans to expand on the base Gwent game with new mechanics and cards. I ended up stopping the project because it could never be deployed on Steam and because I enjoyed using Unreal Engine's multiplayer framework much more than Unity's.");
  imgOne = signal<string>("I was getting tired with using Unity Netcode. When I started implementing more and more mechanics from Gwent, I felt like I was getting too complacent with the code architecture and was starting to do things in too sloppy of a manner. At the very least, when I had stopped working on this project, +99% of everything that I had implemented was working correctly and without the burnout could have very reasonably been completed.");
  contactTypeOne = signal<string>("Game Client");
  contactLinkOne = signal<string>("https://github.com/wmsauve/GwentClone");
  imgTwo = signal<string>("Simple launcher. Over time, there were plans to improve this application to show more stuff. From what I remember, it correctly handled downloading the game client and launching the game if detected in a default install location on your device.");
  contactTypeTwo = signal<string>("Game Launcher");
  contactLinkTwo = signal<string>("https://github.com/wmsauve/GwentLauncher");
  contactTypeThree = signal<string>("Game Server");
  contactLinkThree = signal<string>("https://github.com/wmsauve/GwentServer");
  textBodyOne = signal<string>("The server was a simple express server. From what I remember, creating a new user account and logging in, saving your deck selections, and loading saved decks were all working. As mentioned above, I was planning to collect silly statistics about matchups and deck/card usage rates. Regardless of whether this was something my friends cared all that much about over time, it was a useful exercise in learning how to set up a database.");

  titleTwo = signal<string>("Miscellaneous Projects");
}
