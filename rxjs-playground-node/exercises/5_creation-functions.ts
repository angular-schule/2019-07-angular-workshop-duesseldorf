import { of, from, timer, interval } from 'rxjs';

of('A', 'B', 'C', 1).subscribe(console.log)

from(['😃', '🙃', '😎']).subscribe(console.log)

timer(0, 1000).subscribe(console.log)
