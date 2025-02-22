import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html'
})
export class GameScoreComponent implements OnInit {

  currentScore = 0;
  finalScore: number;

  logStream$ = new Subject();

  score$ = new Subject<number>();

  constructor() { }

  ngOnInit() {

    /******************************/

    this.score$.pipe(
      scan((acc, value) => acc + value, 0)
    )
    .subscribe(score => this.currentScore = score);

    this.score$.pipe(
      reduce((acc, value) => acc + value, 0)
    )
    .subscribe(score => this.finalScore = score);

    /******************************/

    this.score$.subscribe(
      value => this.logStream$.next(value),
      err => {},
      () => this.logStream$.next('❌ COMPLETED')
    );
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
