import { Observable } from 'rxjs';

/*************************************/

// TODO
const myObservable$ = new Observable<string>(subscriber => {
  subscriber.next('🤪');
  subscriber.next('😳');

  setTimeout(() => subscriber.error('🤬'), 3000)

  setTimeout(() => subscriber.next('😳'), 1000)
});

/*************************************/

const observer = {
  next: e => console.log(e),
  error: e => console.error('ERROR', e),
  complete: () => console.info('Complete')
};

myObservable$.subscribe(observer);
