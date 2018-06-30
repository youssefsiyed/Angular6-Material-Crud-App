import { Component, OnInit } from '@angular/core';
import { Comments } from '../../models/Comments';
import { CommentsService } from '../../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
  comment: Comments;
  isLoading: boolean = false;
  constructor(
    private commentService: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    //const id = +this.route.snapshot.params['id'];
    this.commentService.getOneComments(id).subscribe(comments => {
      this.comment = comments;
      this.isLoading = true;
    });
  }
}
