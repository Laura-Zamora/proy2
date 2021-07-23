import { Component, OnInit } from '@angular/core';
import {PhotosphService} from 'src/app/services/photosph.service';
import {PhotosInterface} from './photos-interface';

@Component({
  selector: 'LCZG-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos:PhotosInterface[];
  constructor(private photoService:PhotosphService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(data => {
      this.photos=data;
      console.log(this.photos)});
  }
}

