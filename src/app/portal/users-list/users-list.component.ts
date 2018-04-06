import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs/Subscription';
import { Baby } from '../../enteties/baby';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { Sitter } from '../../enteties/sitter';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  private aBabies: Baby[];
  private aSitters: Sitter[];
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
      // console.log(users.babies);
      this.aBabies = users.babies;
      this.aSitters = users.sitters;
    });
  }

}
