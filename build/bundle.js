var Linux = (function (exports) {
    'use strict';

    function add(x, y) {
      return x + y;
    }

    function substract(a, b) {
      if (a > b) {
        return a - b;
      }

      return b - a;
    }

    var result = add(5, 10);
    console.log(result);

    var divide = function divide(a, b) {
      return b / a;
    };

    exports.add = add;
    exports.substract = substract;
    exports.divide = divide;

    return exports;

}({}));
