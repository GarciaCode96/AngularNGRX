import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  @Input()
  private contadorNieto: number;

  @Output()
  private resetContadorNieto: EventEmitter<number>;

  constructor() {
    this.contadorNieto = 0;
    this.resetContadorNieto = new EventEmitter<number>();
  }

  ngOnInit() {}

  public resetContador(): void{
    this.contadorNieto = 0;
    this.resetContadorNieto.emit(this.contadorNieto);
  }
}
