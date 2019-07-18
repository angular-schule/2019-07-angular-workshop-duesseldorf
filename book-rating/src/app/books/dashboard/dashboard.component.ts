import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Book } from '../shared/book';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadBooks } from '../actions/book.actions';
import { getBooksLoading, getAllBooks } from '../selectors/book.selectors';
import { CreateBookComponent } from '../create-book/create-book.component';
import { filter } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(getBooksLoading));
  books$ = this.store.pipe(select(getAllBooks));

  constructor(private store: Store<State>, private bottomSheet: MatBottomSheet) { }
  ngOnInit() {
    // this.store.dispatch(new LoadBooks());
  }

  showCreateBook() {
    const ref = this.bottomSheet.open(CreateBookComponent);
    ref.afterDismissed()
      .pipe(filter(book => !!book))
      .subscribe(newBook => this.doCreateBook(newBook));
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
