import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Turbo an!
})
export class BookComponent {

  @Input()
  public book: Book;

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  get stars() {
    return new Array(this.book.rating);
  }
}
