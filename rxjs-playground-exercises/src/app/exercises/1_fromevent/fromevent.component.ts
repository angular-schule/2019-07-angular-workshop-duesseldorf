import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html'
})
export class FromeventComponent implements OnInit {

  currentWidth = 0;

  ngOnInit() {

    /******************************/

    fromEvent(window, 'resize')
      .pipe(
        map((e: Event) => (e.currentTarget as Window).innerWidth),
        debounceTime(300),
        startWith(window.innerWidth)
      )
      .subscribe(width => this.currentWidth = width);





    /******************************/
  }

}
