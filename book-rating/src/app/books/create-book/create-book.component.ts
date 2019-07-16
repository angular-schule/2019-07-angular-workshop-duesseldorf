import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

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

    // Hands On:
    // 1. erstelle eine Ereignis mit dem Namen "createBook"
    // 2. löses dieses aus, mit dem neuen Buch
    // 3. aboniere dich auf das Ereignis im Dashboard
    // 4. füge das Buch dem Array hinzu

    this.booksForm.reset();
  }

}
