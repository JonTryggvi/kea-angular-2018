import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState, UsersState } from './store/store';

@Injectable()
export class UsersActions {
  constructor(
    private ngRedux: NgRedux<IAppState>) { }

  static SET_TYPE: String = 'SET_TYPE';
  static INSERT_NEW_BABY: String = 'INSERT_NEW_BABY';

  setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
      type: UsersActions.SET_TYPE,
      payload: isBaby
    });
  }
  insertNewBaby(babies: UsersState): void {
    console.log(babies);

    this.ngRedux.dispatch({
      type: UsersActions.INSERT_NEW_BABY,
      id: 299,
      payload: babies
    });
  }

}


