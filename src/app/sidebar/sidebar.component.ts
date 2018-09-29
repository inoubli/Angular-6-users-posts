import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators'; //added from :   https://coursetro.com/posts/code/154/Angular-6-Tutorial---Learn-Angular-6-in-this-Crash-Course
                                        //to fix menu navigation (activate links with blue)
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl : string;

  constructor(private router: Router) {
    //router.events.subscribe((_:NavigationEnd) => this.currentUrl = _.url)
    router.events.pipe(filter((event: Event) => event instanceof NavigationEnd )).subscribe((_: NavigationEnd) => this.currentUrl = _.url );


   }

  ngOnInit() {
  }

}
