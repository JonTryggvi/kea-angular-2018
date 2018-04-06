import { Injectable } from '@angular/core';
import { Baby } from './enteties/baby';
import { Sitter } from './enteties/sitter';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DataService {
//  Call to web servise to get data.
// add dummy data until we can do that
  subscription;
  babies: Baby[];
  sitters: Sitter[];


  constructor(private ngRedux: NgRedux<IAppState>) {
    this.subscription = this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      // console.log(users.sitters);
      this.babies = users.babies;
      this.sitters = users.sitters;
    });
   }
  filterdBaby;
  filterdSitter;
  aBabies;


  static randomNumberId(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  public filterData(id: number, type: String) {
    switch (type) {
      case 'baby':
        this.filterdBaby = this.babies.find(babie => babie.id === id);
        return this.filterdBaby;
        // break;
      case 'sitter':
        
          
        this.filterdSitter = this.sitters.find(sitter => sitter.id === id);
        
        
        return this.filterdSitter;
        // break;
      default:
        break;
      }
    }
  public updateBaby(id: number, formObject) {
    if (id === this.filterdBaby.id) {
      // console.log(this.editBaby.controls.firstname);
      this.filterdBaby.firstname = formObject.firstname.value;
      this.filterdBaby.lastname = formObject.lastname.value;
    }
  }
    public updateSitter(id: number,  formObject) {
      if (id === this.filterdSitter.id) {
        console.log(formObject);
        this.filterdSitter.firstname = formObject.firstname.value;
        this.filterdSitter.lastname = formObject.lastname.value;
      }
    }


  public addBaby(baby: Baby) {
    baby.id = this.babies.length + 11;
    this.babies.push(baby);
  }
  public addSitter(sitter: Sitter) {
    sitter.id = this.sitters.length + 13;
    this.sitters.push(sitter);
  }

  public deleteBaby(id: number, baby: Baby) {
    this.babies = this.babies.filter(babie => babie.id !== id);
    console.log(this.babies);
  }
  public deleteSitter(id: number, onesitter: Sitter) {
    this.sitters = this.sitters.filter(sitter => sitter.id !== id);
    // console.log(this.sitters);
  }
}
