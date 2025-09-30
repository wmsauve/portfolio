import { Component, signal } from '@angular/core';
import { VideoTextPos } from '../../model/defs.type';
import { Stdvid } from "../components/stdvid/stdvid";
import { StdHeaderIntroText } from '../components/std-header-intro-text/std-header-intro-text';
import { Stdimg } from "../components/stdimg/stdimg";
import { StdHeaderText } from "../components/std-header-text/std-header-text";
@Component({
  selector: 'app-workhistory',
  imports: [Stdvid, StdHeaderIntroText, Stdimg, StdHeaderText],
  templateUrl: './workhistory.html',
  styleUrl: './workhistory.scss'
})
export class Workhistory {
  VideoFormat = VideoTextPos;

  titleOne = signal<string>("More Involved Projects");

  headerOne = signal<string>("Unreal Engine 5 (C++/Blueprints) - Metaverse project (2021-2022)");
  introOne = signal<string>("This was my first project using Unreal Engine 5. I was the lead developer, however the team was small and only consisted of one other junior developer.");

  vidOne = signal<string>("User Interface for a released but later discontinued Unreal Engine 5 product. Joining the \"Sandbox Mode\" prompts AWS Gamelift to place the user into an available game world.");
  vidTwo = signal<string>("Loading sequence modified from Unreal Engine 5 tech demo combined with Cesium Unreal Engine plugin for rendering Earth-sized objects. ");
  vidThree = signal<string>("This early access build successfully networked players over authoritative servers hosted on AWS. Clientside prediction was still required to improve rubberbanding effect on player character model. The game world was also a modified version of the Unreal Engine 5 tech demo.");

  headerTwo = signal<string>("Three.js/node.js (HTML/CSS/JS+TS) - Browser minigames (2020-2021)");
  introTwo = signal<string>("These were games I was tasked to develop as part of the company's Arcade platform project. Every game was developed, deployed, and managed 100% by me. Designs were handled by other people on the team and assets were either handled by the design team or purchased from online marketplaces. Every game was multiplayer and handled 1v1 matches.");

  imgOne = signal<string>("This was the second game that was released. The gameplay follows the even/odd guessing win condition in the marble game played in Squid Game.");
  imgTwo = signal<string>("This was the first game that was released. The gameplay involved the goalie attempting to select the correct direction that the kicker chose. Additionally, the kicker would have to select the sweet spot and void the dead zone on their kick gauge. If the difficult sweet spot is selected, the kicker scores no matter what even if the goalie selected the correct block zone. If the dead zone is selected, the kicker misses no matter what. Otherwise, the kick is a regular shot unless blocked by the goalie. The players alternate roles.");
  imgThree = signal<string>("Before the project was shelved by the company, this was one of two additional in-development games. It involved more complex gameplay where the two players would attempt to cast ninja abilities at each other while dodging basic projectiles.");

  headerThree = signal<string>("Unity/Mediapipe (C#) - Realtime webcam tracking (2022-2023)");
  introThree = signal<string>("I took over the lead developer role on this project involving the use of Mediapipe ported to Unity by homuler. When I started working on it, the project could track head and face movements. I was responsible for not only improving the logic of the head and face movements, but implementing the tracking of fingers, hands, arms, and shoulders.");

  vidFour = signal<string>("This was the single most problem ridden project that I've ever worked on. First, this project was for the sake of a very large client for the purposes of incorporating the logic into their already launched application. Second, the success of this project involved solving a problem that was not as broadly understood by people in the 2022s. Due to the nature of how neural networks produce outputs based on how they were architected and what data they were trained on, hallucinations, as we commonly understand them with respect to LLMs like ChatGPT, absolutely exist for MediaPipe as well. The client required near perfect real time motion tracking which required dealing with frame-to-frame inconsistency (jitter, hands switching between left and right, hands suddenly being not detected, etc.) and straight up incorrect outputs like objects being mistaken as body parts due to detailed backgrounds.");

  headerFour = signal<string>("Unity/Unreal Engine 5 (C#/C++/Blueprints) - On-device and remote AI integration (2023-2025)");
  introFour = signal<string>("This project spanned multiple smale scale applications that included a variety of additional bits of functionality added in them. But they were, at their core, chat bots that used LLMs and personas to provide specific information about a given topic where the avatar is fully animated by the project's solution.");

  imgFour = signal<string>("This is just one example of the number of applications I worked on that included the animation solution. Other examples included a prototype of this exact same solution implemented in Unreal Engine 5 using Metahumans and various other Unity versions. The model was a proprietary neural network trained on our own data that was either hosted remotely or could be used with Unity Sentis with the model as an ONNX file.");

  titleTwo = signal<string>("Smaller Temporary Projects or Prototypes");

  headerFive = signal<string>("React/node.js (HTML/CSS/TS) - Web development (2023-2024)");
  introFive = signal<string>("At various points in time during my employment at FluentT, I assisted in doing frontend web development. These websites are no longer deployed or were replaced whenever a more dedicated frontend web developer was hired in late 2024.");

  headerSix = signal<string>("Unity (C#) - AR (2023)");
  introSix = signal<string>("Using the XR and AR foundation packages, I spent a number of months prototyping an AR application that made use of the company's animation solution. The functionality implemented was basic and includes placing game objects on surfaces and triggering logic based on detecting specific images with your device's camera. The project went nowhere and the company trashed it.");

  headerSeven = signal<string>("Unreal Engine 5 (C++/Blueprints) - VR (2021)");
  introSeven = signal<string>("Using a Quest 2, I was tasked with testing the performance of various 3D assets to determine whether to pursue a larger scale application using VR. This ended up being scrapped in order to work on the project detailed above.");

  headerEight = signal<string>("Unreal Engine 5 (C++/Blueprints) - Cinematic (2022)");
  introEight = signal<string>("During my time at FluentT, my first project worked on was a cinematic that I was tasked with making using some other company's assets. This only lasted a few months because I'm not actually a very artistic person with an eye for camera shots and composition and there was no planning whatsoever. Regardless, I became quite familiar with the Sequencer in Unreal Engine and was able to further familiarize myself with the engine in general.");
}