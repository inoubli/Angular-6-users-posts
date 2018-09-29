import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


import { trigger , style , transition , animate , keyframes , query , stagger } from '@angular/animations';
import { Users } from '../models/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class UsersComponent implements OnInit {

  
  users: Users[];
  isLoading: boolean = false;
  search: string;
  itemsPerPage: number = 3;
  page: number = 1;
  propertyName: string;

  constructor(
    public data: DataService,
    public progress: NgProgress,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  

  ngOnInit() {
    
   this.isLoading = true;
    this.data.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users.length,"Users loaded")
      this.isLoading = false;

    });
  }


    ////////////////FITLER PAGE///////////////////
    public getItemPages(itemsPerPage: number) {
      return (this.itemsPerPage = itemsPerPage);
    }
    /////////////FILTER PROPERTY///////////////////
    public getProperty(propertyName) {
      this.propertyName = propertyName;
    }
  
    /////////////REMOVE Method///////////////
    public deleteComments(user: Users) {
      if (confirm('Are you Sure ?')) {
        this.data.removeOneUsers(user.id).subscribe(() => {
          this.users.forEach((cur, index) => {
            if (user.id === cur.id) {
              this.users.splice(index, 1);
            }
          });
          console.log("Deleted user : ",user);
        });
      }
      this.toastr.error(
        "L'utilisateur est bien supprimer!!",
        'Users Deleted',
        {
          timeOut: 2000
        }
      );
    }


}
