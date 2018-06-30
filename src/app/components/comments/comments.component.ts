import { Component, OnInit } from '@angular/core';
import { Comments } from '../../models/Comments';
import { CommentsService } from '../../services/comments.service';
import { NgProgress } from '@ngx-progressbar/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comments[];
  isLoading: boolean = false;
  search: string;
  itemsPerPage: number = 3;
  page: number = 1;
  propertyName: string;

  constructor(
    public commentsService: CommentsService,
    public progress: NgProgress,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.progress.start();
    this.commentsService.GetComments().subscribe(posts => {
      this.comments = posts;
      this.isLoading = true;
      this.progress.complete();
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
  public deleteComments(comment: Comments) {
    if (confirm('Are you Sure ?')) {
      this.commentsService.removeOneComments(comment.id).subscribe(() => {
        this.comments.forEach((cur, index) => {
          if (comment.id === cur.id) {
            this.comments.splice(index, 1);
          }
        });
      });
    }
    this.toastr.error(
      'le commentaire est bien supprimer!!',
      'Comments Deleted',
      {
        timeOut: 2000
      }
    );
  }
}
