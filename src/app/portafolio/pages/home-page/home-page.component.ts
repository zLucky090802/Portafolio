import { AfterViewInit, Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { CardComponent } from '../../components/card/card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SideBarComponent,
    CardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit{

  constructor(private route: ActivatedRoute) {}
  
  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          // Manual smooth scroll
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  }
}
