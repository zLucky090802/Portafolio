import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
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

  isMobile: boolean = false;

  // Listener para detectar cambios en el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkIfMobile();
  }

  // Verificar al iniciar el componente
  ngOnInit(): void {
    this.checkIfMobile();
  }

  // Función para determinar si la pantalla es de tamaño móvil
  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768; // Ajusta el valor según el punto de corte deseado
  }

}
