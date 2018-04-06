import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';
import { UsersService } from './users.service';

const INITIAL_STATE: UsersState = UsersService.getInitialUsersState();

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {
  switch (action.type) {

    case UsersActions.SET_TYPE:
      return tassign(state, { isBaby: action.payload });

    case UsersActions.CREATE_BABY: // action.payload is a baby object to add
      let newBabyArray = [...state.babies, action.payload];
      return tassign(state, { babies: newBabyArray });

      // return { babies: [...state.babies,  action.payload.value] };
    case UsersActions.CREATE_SITTER:
      let newSitterArray = [...state.sitters, action.payload];
      return tassign(state, { sitters: newSitterArray });
    case UsersActions.RATE_SITTER:
      // action.payload has .sitterUsername:string and .rating:number
      // find the sitter the sitter with thte action .payload.sittersId
      let newRatingSitterArray = [...state.sitters, action.payload];
      let sitterId = action.payload.sitterId;
      let rating = action.payload.rating;

      console.log(rating);
      break;
      // use spread operator to update the array

    default:
      return state;
  }
}
