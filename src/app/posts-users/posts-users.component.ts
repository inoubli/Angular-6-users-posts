import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable  } from 'rxjs';
import { trigger , style , transition , animate , keyframes , query , stagger } from '@angular/animations';

import { DataService } from '../data.service'

@Component({
  selector: 'app-posts-users',
  templateUrl: './posts-users.component.html',
  styleUrls: ['./posts-users.component.scss'],
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
export class PostsUsersComponent implements OnInit {
  userId$: Object;    
  myuser$: Object;    //User Object to get the name and use it on our view, 
  posts$: Object;  
  constructor(private data : DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.userId$ = params.id)
   }

  ngOnInit() {
      this.data.getUsersPosts(this.userId$).subscribe(
        data =>   { this.posts$ = data ;  console.log('posts', this.posts$);   }
      )

      this.data.getUser(this.userId$).subscribe(
        data =>   {
            this.myuser$ = data ; 
            console.log('myuser', this.myuser$);
             }
      )
  }
  

}
