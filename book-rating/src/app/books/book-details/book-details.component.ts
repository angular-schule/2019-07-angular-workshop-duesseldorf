import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.route.paramMap
    .pipe(
      map(p => p.get('isbn')),
      switchMap(isbn => this.bs.getSingle(isbn)
        .pipe(catchError((error: HttpErrorResponse) => of({
          isbn: '000',
          title: 'Es gab einen Fehler',
          description: error.url,
          rating: 1,
          firstThumbnailUrl: ''
        }))))
    );

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService) { }
}
