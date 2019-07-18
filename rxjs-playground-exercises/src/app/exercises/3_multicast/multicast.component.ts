import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { MeasureValuesService } from './measure-values.service';
import { share, shareReplay, debounceTime, delay } from 'rxjs/operators';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
  styles: []
})
export class MulticastComponent implements OnInit {

  measureValues$: Subject<number>;

  listeners = [];
  logStream$ = new Subject();

  constructor(private mvs: MeasureValuesService) { }

  ngOnInit() {
    /*******************************/

    // 1. measureValues$: Observable<number>;
    // this.measureValues$ = this.mvs.getValues().pipe(shareReplay(1));

    // 2. mit Subject
    this.measureValues$ = new BehaviorSubject(-1);
    this.mvs.getValues()
      .pipe(delay(5000))
      .subscribe(this.measureValues$);


    /*******************************/
  }

  addListener() {
    this.listeners.push(this.mvs.generateRandomString(5));
  }

  addConsoleListener() {
    const randomString = this.mvs.generateRandomString(5);
    // this.measureValues$.subscribe(e => console.log(randomString, e));
    this.measureValues$.subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

}
