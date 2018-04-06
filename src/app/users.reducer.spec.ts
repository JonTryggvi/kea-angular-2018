import { UsersState } from './store/store';
const deepFreeze = require('deep-freeze');
import { usersReducer } from './users.reducer';
import * as types from './users.actions';
import { initServicesIfNeeded } from '@angular/core/src/view';
import { UsersService } from './users.service';
import { DataService } from './data.service';

describe('register reducer', () => {

  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(UsersService.getInitialUsersState());
  });

  it('Toggle isBaby or sitter', () => {
    const state = UsersService.getInitialUsersState();
    deepFreeze(state);
    const newState = UsersService.getInitialUsersState();
    newState.isBaby = true;

    expect(
      usersReducer(state, {
        type: types.UsersActions.SET_TYPE,
        payload: true
      })).toEqual(newState);
  });
  it('Should add a new baby object to the babies array', () => {
    // create 'mock' of initial state
    // add baby by calling reducer function
    // check that state is correct. Use deep freeze to check no mutations.
    const initialState = UsersService.getInitialUsersState();
    deepFreeze(initialState);
    const afterState = UsersService.getInitialUsersState();

    const baby = {
      id: 99,
      firstname: 'Peter',
      lastname: 'Petursson',
      birthdate: new Date(2018, 0, 1),
      area: 'Copenhagen',
      rating: [],
      username: 'test baby 1',
      role: true
    };
    const sitter = {
      id: 9,
      firstname: 'jon',
      lastname: 'Unnarsson',
      birthdate: new Date(2018, 0, 1),
      area: 'Copenhagen',
      rating: [],
      username: 'test baby 1',
      role: true,
      gender: 'male',
      rate: 300,
      workArea: ['valby', 'vanlose']
    };
    let rating = {
      rating: 4,
      message: 'great',
      date: new Date(2018, 0, 1),
      username: 'test baby 1',
      userId: 99
    }
    // afterState.babies.push(baby);
    afterState.sitters.push(sitter);
    // afterState.ratings.push(rating)
    const newState = usersReducer(initialState, {
      type: types.UsersActions.CREATE_SITTER ,
      payload: sitter 
    });
  

    expect(newState.sitters.length).toEqual(1);
    expect(newState).toEqual(afterState);
    
  }); 


});
