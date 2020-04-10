import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import { CommentSet } from '../../commentSet';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../comment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {
  constructor(private commentService: CommentService) { }
  @Input() pageId: number;
  commentPage: CommentSet;
  showCommentForm = false;
  message: string;
  ngOnInit(): void {
    this.commentService.getComments(this.pageId).subscribe(res => this.commentPage = res);
  }
  changeVote(comment: Comment, delta: number) {
    for (const c of this.commentPage.comments) {
      if (c === comment) {
        c.score += delta;
      }
    }
  }
  writeComment(): void {
    const comment: Comment = {
      username: 'nyaruko',
      datePosted: '10 Apr 2020',
      message: this.message,
      score: 0
    };
    this.commentPage.comments.push(comment);
    this.commentService.addComment(this.commentPage).subscribe();
  }
}
