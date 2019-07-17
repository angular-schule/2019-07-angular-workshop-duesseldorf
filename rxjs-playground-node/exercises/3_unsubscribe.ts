import { simpleTimer$ } from './data/simple-timer';

const subscription = simpleTimer$.subscribe(
  e => { console.log(e); if(e === 3) { subscription.unsubscribe() } },
  e => console.error(e),
  () => console.info('Complete')
);

/******************************/

// setTimeout(() => subscription.unsubscribe(), 4000)

