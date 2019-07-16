import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateUp(book: Book) {
    // TODO: Kopie erstellen
    return book;
  }

  rateDown(book: Book) {
    // TODO: Kopie erstellen
    return book;
  }
}
