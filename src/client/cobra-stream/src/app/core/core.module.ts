import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayDirective } from './directives/overlay.directive';



@NgModule({
  declarations: [OverlayDirective],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
