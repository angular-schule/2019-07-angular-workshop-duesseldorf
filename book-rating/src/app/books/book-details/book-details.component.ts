import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap, catchError, share, shareReplay, tap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails: false;
  loadingNextBook = false;

  book$ = this.route.paramMap
    .pipe(
      map(p => p.get('isbn')),
      tap(() => this.loadingNextBook = true),
      switchMap(isbn => this.bs.getSingle(isbn)
        .pipe(
          catchError((error: HttpErrorResponse) => of({
          isbn: '000',
          title: 'Es gab einen Fehler',
          description: error.url,
          rating: 1,
          firstThumbnailUrl: ''
        })))),
      tap(() => this.loadingNextBook = false),
    );

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService) { }
}
