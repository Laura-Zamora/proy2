import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosphService {

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos');
  }
}
