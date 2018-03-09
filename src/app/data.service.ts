import { Injectable } from '@angular/core';
import { Baby } from './enteties/baby';
import { Sitter } from './enteties/sitter';

@Injectable()
export class DataService {
//  Call to web servise to get data.
// add dummy data until we can do that

  babies: Baby[] = [
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
  ];

  sitters: Sitter[] = [
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
  ];
  constructor() { }
  filterdBaby;
  filterdSitter;
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
