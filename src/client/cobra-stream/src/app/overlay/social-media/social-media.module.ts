import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from './components/instagram/instagram.component';



@NgModule({
    declarations: [InstagramComponent],
    exports: [
        InstagramComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SocialMediaModule { }
