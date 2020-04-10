import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CommentSet} from '../commentSet';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private httpClient: HttpClient) { }
  private baseUrl = 'api/commentPages';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getComments(pageId: number): Observable<CommentSet> {
    const url = `${this.baseUrl}/${pageId}`;
    return this.httpClient.get<CommentSet>(url);
  }
  addComment(commentSet: CommentSet): Observable<any> {
    return this.httpClient.put(this.baseUrl, commentSet, this.httpOptions);
  }
}
