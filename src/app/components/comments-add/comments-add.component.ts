import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/Comments';
import { CommentsService } from '../../services/comments.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; /// to navigate between page

@Component({
  selector: 'app-comments-add',
  templateUrl: './comments-add.component.html',
  styleUrls: ['./comments-add.component.css']
})
export class CommentsAddComponent implements OnInit {
  comments: Comments[];
  currentComment: Comments = {
    postId: 0,
    id: 0,
    name: '',
    email: '',
    body: ''
  };
  constructor(
    public commentsService: CommentsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.commentsService.GetComments().subscribe(posts => {
      this.comments = posts;
    });
  }

  //////////////////SAVE Method////////////////////////
  public addComment(name, email, body) {
    if (!name || !email) {
      alert('Name and Email not Valid');
    } else {
      this.commentsService
        .saveOneComments({ name, email, body } as Comments)
        .subscribe(comments => {
          this.currentComment = comments;
          this.comments.unshift(this.currentComment);
        });
      this.toastr.success(
        'le commentaire est bien ajouter!!',
        'Comments Added'
      );
      // this.router.navigate(['/comments']);   go to comments.html
      // this.router.navigate(['comments'],relativeTo:{this.route}); to reload page ATTENTION route:ActivatedRoute
    }
  }
}
