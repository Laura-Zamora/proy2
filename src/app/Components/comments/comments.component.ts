import { Component, OnInit } from '@angular/core';
import{CommentsphService} from 'src/app/services/commentsph.service';
import { CommentsInterface } from './comments-interface';

@Component({
  selector: 'LCZG-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments:CommentsInterface[];
  constructor(private commentServices:CommentsphService) { }
  
  ngOnInit(): void {
    this.commentServices.getComments().subscribe(data => {
      this.comments=data;
       console.log(this.comments)});
  
  }

}