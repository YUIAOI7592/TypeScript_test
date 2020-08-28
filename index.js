"use strict";
var _loop_1 = function (i) {
    console.log(i);
    setTimeout(function () {
        console.log('這執行第' + i + '次');
    }, 10);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
