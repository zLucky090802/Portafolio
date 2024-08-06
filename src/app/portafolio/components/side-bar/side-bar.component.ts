import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(
    private el: ElementRef
  ){}
  
  isOpen = false;
  router: any;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  scrollToSection(sectionId: string) {
    const section = this.el.nativeElement.querySelector('#' + sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

}

