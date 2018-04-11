import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';
import { UsersService } from './users.service';
// import { Observable } from 'rxjs/Rx';
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
      let sitterId = action.payload.sitterId;
      let jRating = action.payload.rating;
      let jFixKeys = {
        rating: jRating.inpRating,
        message: jRating.inpRatingMsg,
        date: jRating.date
      };
      
      // get an array of all ids and find the index of the required review
  
      // console.log(rating);
      let newSitterRateingArray = [...state.sitters];
      let filteredSitterArray = newSitterRateingArray.find(sitter => sitter.id === sitterId);
      // console.log(filteredSitterArray);
      let newRatingsArray = [...filteredSitterArray.rating, jFixKeys]
      filteredSitterArray.rating = newRatingsArray;
     
      // let newRatingAddedToArray = newRatingsArray.push(jRating);
      // console.log(filteredSitterArray);
      console.log(newSitterRateingArray);
      return tassign(state, { sitters: newSitterRateingArray });
    default:
      return state;
  }
}
