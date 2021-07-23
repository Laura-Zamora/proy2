import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommentsphService {

  constructor(private http:HttpClient) { }

  getComments(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/comments');
  }
}

