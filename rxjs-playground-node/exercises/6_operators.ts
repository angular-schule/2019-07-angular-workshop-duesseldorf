import { from } from 'rxjs';
import { map, filter, reduce, scan, tap } from 'rxjs/operators';

let dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


from(dataArray)
  .pipe(
    map(z => z + 10),
    filter(z => z % 2 == 0),
    // tap(z => console.log(z)),
    reduce((a, b) => a + b),
    map(z => '❤'.repeat(z)),
  )
  .subscribe(console.log)
