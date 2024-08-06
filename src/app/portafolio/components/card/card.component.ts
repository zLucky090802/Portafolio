import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public titleService!: string;

  @Input()
  public img!:string;

  @Input()
  public icon!: string;

  @Input()
  public desc!: string;

  @Input()
  public proyectCard!: boolean;
  
  @Input()
  public link!: string;

}
