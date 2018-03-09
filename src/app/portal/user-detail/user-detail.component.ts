import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  editName = false;
  editBday = false;
  editBaby: FormGroup;
  editSitter: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataServise: DataService,
    private location: Location,
    private fb: FormBuilder) {}

  paramId = Number(this.route.snapshot.paramMap.get('id'));
  babyDetail = this.dataServise.filterData(this.paramId, 'baby');
  sitterDetail = this.dataServise.filterData(this.paramId, 'sitter');
  deleteBaby(id) {
    this.dataServise.deleteBaby(id, this.babyDetail);
    this.router.navigate(['/portal/users-list']);
  }

  deleteSitter(id) {
    this.dataServise.deleteSitter(id, this.sitterDetail);
    this.router.navigate(['/portal/users-list']);
  }


  edit(name) {
    switch (name) {
      case 'babyName':
        this.editName = true;
        break;
      case 'babyBirthday':
        this.editBday = true;
        break;
      case 'sitterName':
        this.editName = true;
        break;
      default:
        break;
    }


  }
  updateBaby() {
    this.dataServise.updateBaby(this.paramId, this.editBaby.controls);
    this.editName = false;
    this.router.navigate(['/portal/users-list']);
  }

  updateSitter() {
    this.dataServise.updateSitter(this.paramId, this.editSitter.controls);
    this.editName = false;
    this.router.navigate(['/portal/users-list']);
  }

  ngOnInit() {

    if (this.babyDetail) {
      // console.log(this.babyDetail.birthdate.toLocaleDateString('%d-%b-%Y'));
      this.editBaby = this.fb.group({
        firstname: [this.babyDetail.firstname],
        lastname: [this.babyDetail.lastname],
        birthdate: ['']
      });
    } else if (this.sitterDetail) {
      this.editSitter = this.fb.group({
        firstname: [this.sitterDetail.firstname],
        lastname: [this.sitterDetail.lastname]
      });
    }
    // console.log(this.editSitter.controls);
    // console.log(this.sitterDetail);

  }



}
