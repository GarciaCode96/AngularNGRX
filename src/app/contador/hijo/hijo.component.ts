import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>){}

  ngOnInit(){
    this.store.select('contador')
    .subscribe((contador: number) => {
      this.contador = contador;
    });
  }

  public multiplicarContador(): void{
    const multiplicarAction = new MultiplicarAction(3);
    this.store.dispatch(multiplicarAction);
  }

  public dividirContador(): void{
    const dividirAction = new DividirAction(3);
    this.store.dispatch(dividirAction);
  }
}
