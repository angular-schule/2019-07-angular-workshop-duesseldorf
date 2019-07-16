import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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

  get stars() {
    return new Array(this.book.rating);
  }
}
