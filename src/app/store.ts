/** this is where we create our app reactive store */
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
/** Store to store our application state and avoid loading multiple times the data */

/** to keep our storage nice and type safe we create an interface */
/** id is optional is a string or a number */
export interface Note {
  color: string,
  title: string,
  value: string,
  id?: string | number,
  createdAt?: string,
  updatedAt?: string,
  userId?: string
}

/** interface for what our state looks like */
export interface State {
  notes: Array<Note>
}

/** state app starts with */
const defaultState = {
  notes: []
}

/** create the store, we pass it the default state */
const _store = new BehaviorSubject<State>(defaultState);


/** create a service to interact with the store */
@Injectable()

export class Store {
  private _store = _store;
  /**  make observable that we will subscribe to to get data, called : changes*/
  changes = this._store.asObservable().distinctUntilChanged() /** ensures all state changes are going to be immutable */

  setState(state: State) {
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }
}