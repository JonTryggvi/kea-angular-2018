import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersActions } from '../../users.actions';
import { Rating } from '../../enteties/rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersActions: UsersActions,
    private route: ActivatedRoute) { }
  
  paramId = Number(this.route.snapshot.paramMap.get('id'));
  onSubmit(form, event: Event) {
    event.preventDefault();
    let rating: Rating = form.value as Rating;
    let date: Date = new Date();
    rating.date = date;
    this.usersActions.rateSitter(this.paramId, rating);
    this.router.navigate(['/portal/users-list']);
  }
  ngOnInit() {
    this.rateForm = this.fb.group({
      inpRating: [0],
      inpRatingMsg: ['']
    });
  }

}
