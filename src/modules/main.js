import add from './one';
import substract from './two';


const divide = (a, b) => b / a;

const value = () => 2 === 3;

if (value) {
  throw new Error('this is my error deal with it');
}

export { add, substract, divide };
