import { ActionsObservable } from "redux-observable";
import { Injectable } from "@angular/core";
import { UsersActions } from "./users.actions";
import { UsersService } from "./users.service";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from "rxjs/Observable";


@Injectable()
export class UsersEpic {

  constructor(private userServise: UsersService) { }

  updateUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.UPDATE_USER) // Listen for this action
    .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
      console.log(payload);
      return this.userServise.updateUser(payload._id, payload)
      .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
        type: UsersActions.FAILED_UPDATE_USER,
        payload: error
      }));
    });
  }
 
  createUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.CREATE_USER) // Listen for this action
    .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
      // console.log(payload);
      return this.userServise.createUser(payload)
        .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
          type: UsersActions.USER_CREATED,
          payload: result
        }))   
      .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
        type: UsersActions.FAILED_DELETE_USER,
        payload: error
      }));
    });
  }

  getUsers = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.GET_USERS) // Listen for this action
      .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
        return this.userServise.getUsers()
        .map((result: any[]) => ({ // when web service responds with success, call this action with payload that came back from webservice
          type: UsersActions.RECEIVED_USERS,
          payload: result.filter(x => x.devId === 'JT')
        }))
        .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
          type: UsersActions.FAILED_RECEIVED_USERS,
          payload: error
        }));
      });
  }
  
  deleteUser = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.DELETE_USER) // Listen for this action
    .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
      // console.log(payload);
      return this.userServise.deleteUser(payload)
        .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
          type: UsersActions.USER_DELETED,
          payload: result
        })) 
      .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
        type: UsersActions.FAILED_DELETE_USER,
        payload: error
      }));
    });
  }

  rateSitter = (action$: ActionsObservable<any>) => {
    return action$.ofType(UsersActions.RATE_SITTER) // Listen for this action
      .mergeMap(({ payload }) => { // payload: (subject: Subject, date: Date): When this action is activated, call ws through service class or directly like below
        console.log(payload);
        return this.userServise.rateSitter(payload.sitterId, payload.person)
          .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
            type: UsersActions.RATE_SITTER_SUCCESS,
            payload: result
          }))
          .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
            type: UsersActions.RATE_SITTER_FAILED,
            payload: error
          }));
      });
  }



}
