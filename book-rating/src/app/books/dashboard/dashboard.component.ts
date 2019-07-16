import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // VORSICHT: bug bei AJAX!
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private br: BookRatingService) { }

  ngOnInit() {
    this.books = [
      {
        isbn: '111',
        title: 'Angular',
        description: 'Tolles Buch',
        rating: 5
      },
      {
        isbn: '222',
        title: 'AngularJS',
        description: 'Altes Buch',
        rating: 3
      },
      {
        isbn: '333',
        title: 'React',
        description: 'Blubb',
        rating: 1
      }
    ];
  }

  doRateDown(book: Book) {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a , b) => b.rating - a.rating);
  }

  doCreateBook(newBook: Book) {
    this.books = [...this.books, newBook];
  }
}
