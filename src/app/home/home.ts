import { Component, signal } from '@angular/core';
import { VideoTextPos } from '../../model/defs.type';
import { Stdvid } from "../components/stdvid/stdvid";
import { StdHeaderIntroText } from '../components/std-header-intro-text/std-header-intro-text';

@Component({
  selector: 'app-home',
  imports: [Stdvid, StdHeaderIntroText],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  VideoFormat = VideoTextPos;

  headerOne = signal<string>("Unreal Engine 5 - Metaverse project (2020-2021)");
  introOne = signal<string>("This was my first project using Unreal Engine 5.");

  vidOne = signal<string>("User Interface for a released but later discontinued Unreal Engine 5 product.");
  vidTwo = signal<string>("Loading sequence modified from Unreal Engine 5 tech demo combined with Cesium Unreal Engine plugin for rendering Earth-sized objects. ");
  vidThree = signal<string>("This early access build successfully networked players over authoritative servers hosted on AWS. Clientside prediction was still required to improve rubberbanding effect on player character model.");

  headerTwo = signal<string>("HTML/CSS/JS - Browser minigames (2021-2022)");
  introTwo = signal<string>("These were some trash ass games I worked on.");
}
