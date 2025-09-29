import { Component, signal } from '@angular/core';
import { Stdimg } from '../components/stdimg/stdimg';
import { VideoTextPos } from '../../model/defs.type';
import { StdHeaderText } from '../components/std-header-text/std-header-text';
import { StdHeaderIntroText } from '../components/std-header-intro-text/std-header-intro-text';
import { ListOfLinks } from "../components/list-of-links/list-of-links";

@Component({
  selector: 'app-home',
  imports: [Stdimg, StdHeaderText, StdHeaderIntroText, ListOfLinks],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  VideoFormat = VideoTextPos;

  profileText = signal<string>("I like to make games. My earliest memories with playing games are playing Super Mario Bros. 3 on the NES at home or playing Doom 2 at my dad's office. This never stopped and I continued on for the rest of my life playing games as my primary hobby and focus of attention. I was usually quite good at the various competitive games that I played, but there were always friends at school that were better than me. When I got to University, I started to become quite a bit better than others to the detriment of my studies. Starcraft 2, League of Legends, World of Warcraft, and Diablo 3 are the main games where I'd been able to reach a 95th (or more) percentile position on their respective competitive ladders. Since I never broke the ceiling into pro gaming, I naturally gravitated towards making games which brings me full circle to my first statement in this paragraph; I like to make games.");
  mainHeader = signal<string>("Welcome to William's Profile Page!");

  headerOne = signal<string>("Game Developer");
  introOne = signal<string>("I consider my primary skillset to be that of a game developer. The type of coding I have spent the most of my time doing has been related to implementing the gameplay mechanics, working with 3D animated models, understanding optimization techniques related to constructing 3D game worlds, etc. However, I have been exposed to or actively worked on projects that have spanned a number of frameworks unrelated to game development. Take a look through both project tabs to check them out.");

  headerTwo = signal<string>("Contact");
  introTwo = signal<string>("As a Millenial, I don't answer calls on my phone (not that I think anyone is going to call me anyways). I do reply very quickly to text messages and emails.");
  
  contactTypeOne = signal<string>("Email");
  contactTextOne = signal<string>("wmsauve@hotmail.com");
  contactTypeThree = signal<string>("LinkedIn");
  contactLinkThree = signal<string>("https://www.linkedin.com/in/william-sauve-49180937");
  contactTextThree = signal<string>("William Sauvé");

  headerThree = signal<string>("Website Links");
  introThree = signal<string>("I obviously cannot show code for projects I've worked on as part of my work history. Any public repositories mentioned in the personal projects tab can be found in the github link below.");

  websiteTypeOne = signal<string>("Github");
  websiteTextOne = signal<string>("Wmsauve");
  websiteLinkOne = signal<string>("https://github.com/wmsauve");
  websiteTypeTwo = signal<string>("Indie Project Blog");
  websiteTextTwo = signal<string>("Medium @ wmsauve1");
  websiteLinkTwo = signal<string>("https://medium.com/@wmsauve1");
}
