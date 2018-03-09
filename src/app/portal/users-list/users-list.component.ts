import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private data: DataService ) { }
  aBabies = this.data.babies;
  aSitters = this.data.sitters;
  // console.log(this.aBabies);


  ngOnInit() {
  }

}
