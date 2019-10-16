import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input()
  private contadorHijo: number;

  @Output()
  private respuestaContadorHijo: EventEmitter<number>;

  constructor() {
    this.contadorHijo = 0;
    this.respuestaContadorHijo = new EventEmitter<number>();
  }

  ngOnInit() {}

  public multiplicarContador(): void{
    this.contadorHijo = this.contadorHijo *= 2;
    this.respuestaContadorHijo.emit(this.contadorHijo);
  }

  public dividirContador(): void{
    this.contadorHijo = this.contadorHijo /= 2;
    this.respuestaContadorHijo.emit(this.contadorHijo);
  }

  public resetContadorHijo(contadorNieto: number): void{
    this.contadorHijo = contadorNieto;
    this.respuestaContadorHijo.emit(this.contadorHijo);
  }
}
