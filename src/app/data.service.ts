import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { Users } from "./models/Users";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn : 'root'
})
export class DataService {
  UsersUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() : Observable<Users[]>{
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
  }

  
  getUser(userId): Observable<Users> {
    let url = `${this.UsersUrl}/${userId}`;
    return this.http.get<Users>(url);
  }

  saveOneUsers(user: Users): Observable<Users> {
    return this.http.post<Users>(this.UsersUrl, user, httpOptions);
  }

  updateOneUsers(user: Users): Observable<Users> {
    let url = `${this.UsersUrl}/${user.id}`;
    return this.http.put<Users>(url, httpOptions);
  }

  removeOneUsers(users: Users | number): Observable<Users> {
    //const id = typeof user === 'number' ? user : user.id;
    const id = typeof users === 'number' ? users : users.id;
    const url = `${this.UsersUrl}/${id}`;
    return this.http.delete<Users>(url, httpOptions);
  }



  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getUsersPosts(userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  }
}
