var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//проверка типов
var sum;
sum = 1200;
if (typeof sum === "number") {
    var result = sum / 12;
    console.log(result);
}
var sum1 = 36.6;
if (typeof sum1 === "number") {
    console.log(sum1 / 6);
}
//Приведение типов
var someAnyValue = "Any value";
var lengthValue = someAnyValue.length;
console.log(lengthValue);
var lengthValue1 = someAnyValue.length;
console.log(lengthValue1);
//Функции
function add(a, b) {
    return a + b;
}
var c = add(1, 2);
console.log(c);
var func1 = function (a, b) {
    return a + b;
};
var d = func1(3, 4);
console.log(d);
//Необязательные параметр
function notNeedParameter(needParam, notNeedParam) {
    console.log(needParam);
    if (notNeedParam) {
        console.log(notNeedParam);
    }
}
//Необязательный параметр с значением по умолчанию
function notNeedParamDefault(needParam, notNeedParam) {
    if (notNeedParam === void 0) { notNeedParam = 'Значение по умолчанию'; }
    console.log(needParam);
    console.log(notNeedParam);
}
function arrayParams(needParams) {
    var arrayParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arrayParams[_i - 1] = arguments[_i];
    }
    console.log(arrayParams);
}
arrayParams("need", "notNeed1", "notNeed2");
function addReload(a, b) {
    return a + b;
}
console.log(addReload("a", "b"));
console.log(addReload(1, 2));
//Переменная как функция
var varAsFunction;
varAsFunction = function (c, d) {
    return c + d;
};
console.log(varAsFunction(1, 2));
varAsFunction = function (c, d) {
    return c * d;
};
console.log(varAsFunction(1, 2));
//Функции обратного вызова
function myFunction(a, b, calcFunction) {
    console.log(calcFunction(a, b));
}
//Классическое создание функции
//let myCalcFunction = function (a: number, b: number): number {
//     return a - b;
// };
//Создание функции с помощью лямбда-выражений
var myCalcFunction = function (a, b) {
    return a - b;
};
myFunction(1, 2, myCalcFunction);
//КЛАССЫ
//Класс со статической переменной
var CalcUtil = (function () {
    function CalcUtil() {
    }
    CalcUtil.getSquare = function (radius) {
        return CalcUtil.PI * radius * radius;
    };
    CalcUtil.PI = 3.14;
    return CalcUtil;
}());
console.log("Площадь круга с радиусом 30 равна" + CalcUtil.getSquare(30));
//# sourceMappingURL=app.js.map