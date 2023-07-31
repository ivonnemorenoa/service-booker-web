import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

}

// Definición de la clase Reloj
export class reloj {
  color: string;
  forma: string;
  tamaño: string;

  constructor(color: string, forma: string, tamaño: string) {
    this.color = color;
    this.forma = forma;
    this.tamaño = tamaño;
  }

  // Método para mover la hora del reloj
  moverHora(nuevaHora: number) {
    console.log(`Moviendo la hora del reloj a las ${nuevaHora} horas.`);
  }

  // Método para mover la fecha del reloj
  moverFecha(nuevaFecha: Date) {
    console.log(`Moviendo la fecha del reloj a ${nuevaFecha.toLocaleDateString()}.`);
  }  

  
}



