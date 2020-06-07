import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  @Input()
  instaSource: string;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    $('.gifplayer').gifplayer('stop');
  }

}
