// app.component.ts
import { Component } from '@angular/core';
import { Store, props } from '@ngrx/store';
import { increment, decrement } from './../../services/actions';

@Component({
  selector: 'app-store',
  template: `
    <div>
      <p>Count: {{ count$ | async }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `
})
export class StoreComponent {
  count$ = this.store.select(x => {console.log(x)});

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
