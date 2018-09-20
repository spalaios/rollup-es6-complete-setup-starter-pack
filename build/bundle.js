var Suraj = (function (exports) {
    'use strict';

    function add(x, y) {
      return x + y;
    }

    function substract(a, b) {
      if (a > b) {
        return a - b;
      }

      console.log('i m two.js');
      return b - a;
    }

    var result = add(5, 10);
    console.log(result);

    var divide = function divide(a, b) {
      return b / a;
    };

    {
      throw new Error('this is my error deal with it');
    }

    exports.add = add;
    exports.substract = substract;
    exports.divide = divide;

    return exports;

}({}));
//# sourceMappingURL=bundle.js.map
