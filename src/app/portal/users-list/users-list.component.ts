import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs/Subscription';
import { Baby } from '../../enteties/baby';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { Sitter } from '../../enteties/sitter';
import { Rating } from '../../enteties/rating';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  private aBabies: Baby[];
  private aSitters: Sitter[];
  private aRating: Rating[];
  public iAverageRating;
  ngOnDestroy(): void {
    // Always unsubscribe on destroy.
    let test;
    this.subscription.unsubscribe();
  }

  constructor(
    private data: DataService,
    private ngRedux: NgRedux<IAppState>
  ) { }
  // aBabies = this.data.babies;
  // aSitters = this.data.sitters;
  // console.log(this.aBabies);
 

  ngOnInit() {
    this.subscription = this.ngRedux.select(state => state.users).subscribe(users => {
      console.log(users);
      this.aBabies = users.babies;
      this.aSitters = users.sitters;
      let sum = 0;
      let avg = 0
      if (users.sitters.length > 0) {
        for (let i = 0; i < users.sitters.length; i++) {
          this.aRating = this.aSitters[i].rating;
          for (let j = 0; j < this.aRating.length; j++) {
            sum += this.aRating[j].rating;
          }
          avg = sum / this.aRating.length;
        }
        // console.log(avg);
        
      }
      this.iAverageRating = avg.toFixed(1);
      // this.aRating = this.aSitters.rating;
    });
  }

}
