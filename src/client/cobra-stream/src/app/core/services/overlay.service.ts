import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  public static ShowInstagram = false;

  constructor() { }

  showInstagram() {
    OverlayService.ShowInstagram = true;
  }
}
