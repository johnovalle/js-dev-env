import './index.css';

import numeral from 'numeral';
const gameValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${gameValue} for that fantastic game!`);
