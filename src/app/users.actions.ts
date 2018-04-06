import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState, UsersState } from './store/store';
import { Baby } from './enteties/baby';
import { DataService } from './data.service';
import { Sitter } from './enteties/sitter';
import { Rating } from './enteties/rating';

@Injectable()
export class UsersActions {
  constructor(
    private ngRedux: NgRedux<IAppState>) { }

  static SET_TYPE: String = 'SET_TYPE';
  static CREATE_BABY: String = 'CREATE_BABY';
  static CREATE_SITTER: String = 'CREATE_SITTER';
  static RATE_SITTER: String = 'RATE_SITTER';

  setType(isBaby: boolean): void {
    this.ngRedux.dispatch({
      type: UsersActions.SET_TYPE,
      payload: isBaby
    });
  }
  createBaby(baby: Baby): void {
    // console.log(baby);
    baby.id = DataService.randomNumberId(0, 999999); // dummy id untill we can do better with Real data servise
    this.ngRedux.dispatch({
      type: UsersActions.CREATE_BABY,
      payload: baby
    });
  }
  createSitter(sitter: Sitter): void {
    console.log(sitter);
    sitter.id = DataService.randomNumberId(0, 999999);
    this.ngRedux.dispatch({
      type: UsersActions.CREATE_SITTER,
      payload: sitter
    });
  }
  rateSitter(sitterId: number, rating: Rating): void {
    // console.log(rating);
    this.ngRedux.dispatch({
      type: UsersActions.RATE_SITTER,
      payload: { sitterId, rating }
    });
  }
 

}


