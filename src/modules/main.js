import add from './one';
import substract from './two';

const result = add(5, 10);
console.log(result);

const divide = (a, b) => {
    return b/a;
}

export  {add, substract, divide};

