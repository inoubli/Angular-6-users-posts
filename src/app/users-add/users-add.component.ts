import { Component, OnInit } from '@angular/core';
import { Users } from '../models/Users';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; /// to navigate between page

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent implements OnInit {

  users: Users[];
  currentUser: Users = {
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
  constructor(
    public usersService: DataService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;     
    });
  }

  //////////////////SAVE Method////////////////////////
  public addUser(name, email, username) {
    if (!name || !email) {
      alert('Name and Email not Valid');
    } else {
      this.usersService
        .saveOneUsers({ name, email, username   } as Users)
        .subscribe(users => {
          this.currentUser = users;
          this.users.unshift(this.currentUser);
          console.log('users', this.users);
        });
      this.toastr.success(
        'bien ajouter!!',
        'User Added'
      );
      this.router.navigate(['/']);  
      //this.router.navigate(['/'],relativeTo:{this.route}); //to reload page ATTENTION route:ActivatedRoute
    }
  }

}
