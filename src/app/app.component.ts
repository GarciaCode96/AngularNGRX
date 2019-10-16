import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';

interface appState {
  contador: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  titulo: string;
  contador: number;

  constructor(private store: Store<appState>){
    this.titulo = 'Contador con NGRX';
    this.store.subscribe((state: any) => {
      this.contador = state.contador;
    });
  }

  public incrementarContador(): void{
    const accionIncrementar = new IncrementarAction();
    this.store.dispatch(accionIncrementar);
  }

  public decrementarContador(): void{
    const accionDecrementar = new DecrementarAction();
    this.store.dispatch(accionDecrementar);
  }

  public recibirContadorHijo(contadorHijo: number): void{
    this.contador = contadorHijo;
  }
}
