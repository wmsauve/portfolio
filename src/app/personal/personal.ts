import { Component, signal } from '@angular/core';
import { StdHeaderIntroText } from '../components/std-header-intro-text/std-header-intro-text';
import { StdHeaderText } from '../components/std-header-text/std-header-text';
import { Stdimg } from '../components/stdimg/stdimg';
import { VideoTextPos, VideoType } from '../../model/defs.type';
import { ListOfLinks } from '../components/list-of-links/list-of-links';
import { Stdvid } from "../components/stdvid/stdvid";
import { DownloadLink } from "../components/download-link/download-link";

@Component({
  selector: 'app-personal',
  imports: [StdHeaderIntroText, Stdimg, StdHeaderText, ListOfLinks, Stdvid, DownloadLink],
  templateUrl: './personal.html',
  styleUrl: './personal.scss'
})
export class Personal {
  VideoFormat = VideoTextPos; 
  VideoDefs = VideoType;
  contactText = signal<string>("Public Repository Link");

  titleOne = signal<string>("Games");
  
  headerOne = signal<string>("Unity/node.js/.NET/MongoDB (C#/TS) - Gwent clone (Indefinitely Postponed)");
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
  
  headerTwo = signal<string>("Unreal Engine 5 (C++/Blueprints) - Initiate (Temporarily Postponed)");
  introTwo = signal<string>("When I stopped working on the Gwent Clone project, I started working on an Unreal Engine 5 game that I have intentions to complete no matter how long it ends up taking. I called the game Initiate because it sounds enough like cheaply made but entertaining action movie while also giving the impression that I had some kind of interesting intentions behind it. It is currently deprioritized until further notice. Sometimes life just kinda does that to you.");
  vidOne = signal<string>("Initiate uses a grid based gameplay area with standard tactics style movements, abilities, combat, and character statistics. The currently state of development is that of setting up all the required subsystems before expanding on any given thing to bring the game towards completion. A playable build is still a bit off.");
  vidTwo = signal<string>("Taking from the experience I gained from working on various animation based projects, I spent a while not developing the game and instead worked on a cinematic. The primary goal was learning more artistic related components of game development and video editing like camera work, lighting, audio, voice acting, etc. The end result was about as good as I could expect and I'll look into seeing how well I can improve upon this first attempt as time goes on.");
  textBodyTwo = signal<string>("You can find a link to my blog on the home page where I detail my journey of developing this game. This is a passion project that I expect will end up taking multiple times longer to develop than originally planned. A number of issues like scope creeping myself and real life blockers have made it hard at times to stay focused on this project. Regardless, it will eventually get done one way or another.");

  headerThree = signal<string>("Unity (C#) - Unnamed Group Project (Ongoing)");
  introThree = signal<string>("This is another indie project that I am involved with. It is in very early stages of development with the only 100% confirmed components are that it will be a 2D game.");
  vidThree = signal<string>("As mentioned, development is in the very early stages. My only experience with 2D games is the web browser based games that were not made using Unity. Here is a preliminary bit of development familiarizing myself with how Unity handles 2D components and implementing some chunk loading optimization.");
  
  titleTwo = signal<string>("Miscellaneous Projects");
  headerFour = signal<string>("Unity (C#) - L-system visualizer");
  introFour = signal<string>("This was a project I made as part of a job application process. I was tasked with visualizing a tree in Unity and decided to use L(indenmayer)-systems as the primary driving logic.");
  vidFour = signal<string>("The main options to choose from are whether to use hardcoded L-systems taken from The Algorithmic Beauty of Plants (Lindenmayer and Prusinkiewicz) or to create a dynamic L-system and whether to instantly render the L-system or allow for the growth logic to visualize the tree growing. Vizualizing the tree with compute shaders was required to prevent more complex L-systems from massively impacting performance due to the exponential nature of how they grow.");
  contactTypeFour = signal<string>("L-system Project");
  contactLinkFour = signal<string>("https://github.com/wmsauve/LsystemVisualizer");
  downloadLabelOne = signal<string>("Documentation");
  downloadFileOne = signal<string>("doc1.pdf");
  fileNameOne = signal<string>("documentation.pdf");

  headerFive = signal<string>("Angular/.NET (C#/HTML/CSS/TS) - Todo List");
  introFive = signal<string>("This was another project I made as part of a job application. While the project itself is minimalist and probably not very optimal, it got me into Angular.");
  contactTypeFive = signal<string>("Angular Frontend");
  contactLinkFive = signal<string>("https://github.com/wmsauve/TODO-A");
  contactTypeSix = signal<string>(".Net Backend");
  contactLinkSix = signal<string>("https://github.com/wmsauve/TODO-S");

  headerSix = signal<string>("Angular (HTML/CSS/TS) - This Portfolio Website");
  introSix = signal<string>("I am a much bigger fan of Angular than React. So this website is made with Angular and not React. I wonder how much I would end up changing my opinion the second I am tasked with working on a React project. I like making games more, so there is probably a lot of insincerity in my choosing of a favorite web development framework.");
  contactTypeSeven = signal<string>("Angular Frontend");
  contactLinkSeven = signal<string>("https://github.com/wmsauve/portfolio");
}