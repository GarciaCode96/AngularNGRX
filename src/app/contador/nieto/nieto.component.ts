import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ResetearAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('contador')
    .subscribe((contador: number) => {
      this.contador = contador;
    });
  }

  public resetContador(): void {
    const resetAction = new ResetearAction();
    this.store.dispatch(resetAction);
  }
}
