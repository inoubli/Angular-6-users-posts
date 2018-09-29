import { Component, OnInit , ViewChild } from '@angular/core';
import { Users } from '../models/Users';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.scss']
})
export class UsersUpdateComponent implements OnInit {
  users : Users [];
  user: Users = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
        street: '', 
        suite: '',
        city: '',
        zipcode: '',
        geo: {lat: '', lng: ''  }
    },
    phone: '',
    website: '',
    company: {
        name: '', 
        catchPhrase: '',  
        bs: '',
    }
  };
  userr: Users;
  @ViewChild('userForm') form: any;

  constructor(
    private userService: DataService,
    private toast: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(users => {
      this.user = users;
    });
  }

  //////////////////Update////////////////////////
  onSubmit({ value, valid }: { value: Users; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      this.userService.updateOneUsers(value).subscribe(users => {
        this.userr = users; console.log("Updated user : ", this.userr.email);
      });
      //this.users.unshift(value);
      this.form.reset();
      this.toast.warning(
        'Utilisateur bien Modifié!!',
        'User Successfuly Updated'
      );
    }
  }
}
