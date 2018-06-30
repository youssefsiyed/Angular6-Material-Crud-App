import { Injectable } from '@angular/core';
import { Comments } from '../models/Comments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  CommentsUrl: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  ////////////GET ALL//////////////////
  public GetComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(this.CommentsUrl);
  }

  //////////GET ONE////////////////////
  getOneComments(id: number): Observable<Comments> {
    let url = `${this.CommentsUrl}/${id}`;
    return this.http.get<Comments>(url);
  }

  ////////////////SAVE ONE //////////////
  saveOneComments(comment: Comments): Observable<Comments> {
    return this.http.post<Comments>(this.CommentsUrl, comment, httpOptions);
  }

  //////////////UPDATE ONE///////////////
  updateOneComments(comment: Comments): Observable<Comments> {
    let url = `${this.CommentsUrl}/${comment.id}`;
    return this.http.put<Comments>(url, httpOptions);
  }

  //////////////DELETE ONE ///////////////////////
  removeOneComments(comments: Comments | number): Observable<Comments> {
    const id = typeof comments === 'number' ? comments : comments.id;
    const url = `${this.CommentsUrl}/${id}`;
    return this.http.delete<Comments>(url, httpOptions);
  }
}
