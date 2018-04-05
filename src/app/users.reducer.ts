import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = {
  isBaby: true,
  babies: [
    {
      id: 1,
      firstname: 'Oliver',
      lastname: 'Twist',
      birthdate: new Date(2017, 5, 17),
      area: 'Greater Copenhagen',
      rating: [],
      username: 'oliver',
      role: false
    },
    {
      id: 2,
      firstname: 'Elin',
      lastname: 'Skúladóttir',
      birthdate: new Date(2012, 8, 17),
      area: 'Greater Copenhagen',
      rating: [],
      username: 'elin',
      role: true
    }
  ],
  sitters: [
    {
      id: 3,
      firstname: 'Jón',
      lastname: 'Unnarsson',
      birthdate: new Date(1981, 3, 27),
      area: 'Greater Copenhagen',
      rating: [],
      rate: 200,
      workArea: ['valby', 'vanlose'],
      gender: 'male',
      username: 'death',
      role: false
    },
    {
      id: 4,
      firstname: 'JT',
      lastname: 'Unnarsson',
      birthdate: new Date(1981, 3, 27),
      area: 'Greater Copenhagen',
      rating: [],
      rate: 200,
      workArea: ['valby', 'vanlose'],
      gender: 'male',
      username: 'death',
      role: true
    }
  ]
};

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {
  switch (action.type) {

    case UsersActions.SET_TYPE:
      // console.log(state);
      // console.log(action.payload);
      return tassign(state, { isBaby: action.payload });

    case UsersActions.INSERT_NEW_BABY:

      return  { babies: [...state.babies,  action.payload.value] };
    default:
      return state;
  }
}
