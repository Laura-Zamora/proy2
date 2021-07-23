import { Component, OnInit } from '@angular/core';
import {AlbumsphService} from 'src/app/services/albumsph.service';
import { AlbumsInterface } from './albums-interface';


@Component({
  selector: 'LCZG-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  
  albums:AlbumsInterface[];
  constructor(private albumService:AlbumsphService ) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data=> {
      this.albums=data;
      console.log(this.albums)});
    
  }

}
