import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Book } from '../shared/book';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadBooks } from '../actions/book.actions';
import { getBooksLoading, getAllBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(getBooksLoading));
  books$ = this.store.pipe(select(getAllBooks));

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // this.store.dispatch(new LoadBooks());
  }

  // TODO: redux!
  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  // TODO: redux!
  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // this.updateAndSort(ratedBook);
  }

  // TODO: redux!
  updateAndSort(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a , b) => b.rating - a.rating);
  }

  // TODO: redux!
  doCreateBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
