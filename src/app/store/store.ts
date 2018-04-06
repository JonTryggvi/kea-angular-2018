import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { usersReducer } from '../users.reducer';
import { Sitter } from '../enteties/sitter';
import { Baby } from '../enteties/baby';
import { Rating } from '../enteties/rating';

export class UsersState {
  isBaby: boolean;
  babies: Baby[];
  sitters: Sitter[];
  ratings: Rating[];
}

export class IAppState {
  users?: UsersState;
}

export const rootReducer = combineReducers<IAppState>({
  users: usersReducer,
  // when you add more redusers you add them here...
  router: routerReducer
});
