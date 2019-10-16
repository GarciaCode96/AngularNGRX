import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private titulo: string;
  private contador: number;

  constructor(){
    this.titulo = 'Contador con NGRX';
    this.contador = 12;
  }

  public incrementarContador(): void{
    this.contador = this.contador += 1;
  }

  public decrementarContador(): void{
    this.contador = this.contador -= 1;
  }

  public recibirContadorHijo(contadorHijo: number): void{
    this.contador = contadorHijo;
  }
}
