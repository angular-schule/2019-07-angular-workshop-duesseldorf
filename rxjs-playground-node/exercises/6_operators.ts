import { from } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

let dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


from(dataArray)
  .pipe(
    map(z => z + 10)
  )
  .subscribe(console.log)

// 1. liefere Zahlen von 1 bis 10
// 2. addiere diese mit 10
// 3. filtere alle Zahlen aus, die ungerade sind
// 4. bilde die Summe aus diesen Zahlen
// 5. zeige so viele Herzen an, wie die Summe lautet
