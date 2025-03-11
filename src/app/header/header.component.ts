import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // constructor(private viewportScroller: ViewportScroller) {}

  // scrollToSection(elementId: string): void {
  //   document.getElementById(elementId)?.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'nearest'
  //   });
  // }
}
