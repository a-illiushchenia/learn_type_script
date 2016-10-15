"use strict";
var Smartphone = (function () {
    function Smartphone() {
    }
    Smartphone.prototype.displayInfo = function () {
        console.log("Smartphone. Model: " + this.model + " company: " + this.company);
    };
    return Smartphone;
}());
exports.Smartphone = Smartphone;
var Tablet = (function () {
    function Tablet() {
    }
    Tablet.prototype.displayInfo = function () {
        console.log("Tablet. Model: " + this.model + " company: " + this.company);
    };
    return Tablet;
}());
exports.Tablet = Tablet;
// второй синтаксис экспорта (можно задать псевдоним для Smartphone)
//export {Device, Tablet, Smartphone as Phone}; 
//# sourceMappingURL=mobiles.js.map