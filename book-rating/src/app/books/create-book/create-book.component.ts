import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @Output()
  createBook = new EventEmitter<Book>();

  booksForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: string) {
    const control = this.booksForm.get(name);
    return control.dirty && control.invalid;
  }

  submitForm() {
    const newBook = {
      ...this.booksForm.value,
      rating: 1
    };

    this.createBook.emit(newBook);

    this.booksForm.reset();
  }

}
