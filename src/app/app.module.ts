import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsUsersComponent } from './posts-users/posts-users.component';  // <-Add here

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; // toast
import  {NgProgressModule} from '@ngx-progressbar/core';
import  {NgProgressHttpModule} from '@ngx-progressbar/http';
import {NgSpinKitModule} from 'ng-spin-kit';
import { NgxPaginationModule } from 'ngx-pagination'; // pagination
import { NgPipesModule } from 'ngx-pipes'; // lot of pipes
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // search pipe
import { FormsModule } from '@angular/forms';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersUpdateComponent } from './users-update/users-update.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailsComponent,
    PostsComponent,
    SidebarComponent,
    PostsUsersComponent,
    UsersAddComponent,
    UsersUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
   
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    NgProgressModule.forRoot(),
    NgProgressHttpModule.forRoot(),
    NgSpinKitModule,
    NgPipesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
