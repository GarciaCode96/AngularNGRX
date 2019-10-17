import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  titulo: string;
  contador: number;

  constructor(private store: Store<AppState>){
    this.titulo = 'Contador con NGRX';

    this.store.select('contador')
    .subscribe((contador: number) => this.contador = contador);
  }

  public incrementarContador(): void{
    const accionIncrementar = new IncrementarAction();
    this.store.dispatch(accionIncrementar);
  }

  public decrementarContador(): void{
    const accionDecrementar = new DecrementarAction();
    this.store.dispatch(accionDecrementar);
  }
}
