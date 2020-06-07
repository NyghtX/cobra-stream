import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayRoutingModule } from './overlay-routing.module';
import { RootOverlayComponent } from './components/root-overlay/root-overlay.component';
import {SocialMediaModule} from "./social-media/social-media.module";


@NgModule({
    declarations: [RootOverlayComponent],
    exports: [
        RootOverlayComponent
    ],
  imports: [
    CommonModule,
    OverlayRoutingModule,
    SocialMediaModule
  ]
})
export class OverlayModule { }
