import { Component, OnInit, ViewChild } from '@angular/core';
import { Comments } from 'src/app/models/Comments';
import { CommentsService } from '../../services/comments.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-update',
  templateUrl: './comments-update.component.html',
  styleUrls: ['./comments-update.component.css']
})
export class CommentsUpdateComponent implements OnInit {
  comments: Comments[];
  comment: Comments;
  commentt: Comments;
  @ViewChild('userForm') form: any;

  constructor(
    private commentService: CommentsService,
    private toast: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getOneComments(id).subscribe(comments => {
      this.comment = comments;
    });
  }

  //////////////////Update////////////////////////
  onSubmit({ value, valid }: { value: Comments; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      this.commentService.updateOneComments(value).subscribe(comments => {
        this.commentt = comments;
      });
      //this.comments.unshift(value);
      this.form.reset();
      this.toast.warning(
        'le commentaire est bien Modifier!!',
        'Comments Updated'
      );
    }
  }
}
