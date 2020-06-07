import { Component, OnInit } from '@angular/core';
import {sleep} from "../../../core/sleep";

@Component({
  selector: 'app-root-overlay',
  templateUrl: './root-overlay.component.html',
  styleUrls: ['./root-overlay.component.scss']
})
export class RootOverlayComponent implements OnInit {

  instaSource = "";

  constructor() { }

  ngOnInit(): void {
    this.doShowInstagram()
  }

  async doShowInstagram() {
    this.instaSource = "assets/instagram.gif"
    await sleep(7100);
    this.instaSource = "";
    await sleep(300000);
    await this.doShowInstagram();
  }

}
