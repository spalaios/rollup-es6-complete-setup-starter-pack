import add from './one';
import substract from './two';

const result = add(5, 10);
console.log(result);

const divide = (a, b) => {
    return b/a;
}

if(true) {
    throw new Error('this is my error deal with it');
}

export  {add, substract, divide};

