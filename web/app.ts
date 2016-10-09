class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};

//проверка типов
let sum: any;
sum = 1200;

if(typeof sum === "number"){

    let result: number = sum/12;
    console.log(result);
}

//Псевдонимы типов
type stringOrNumberType = number | string;
let sum1: stringOrNumberType = 36.6;
if(typeof sum1 === "number"){
    console.log(sum1 / 6);
}

//Приведение типов
let someAnyValue: any = "Any value";
let lengthValue: number = (<string>someAnyValue).length;
console.log(lengthValue);
let lengthValue1: number = (someAnyValue as string).length;
console.log(lengthValue1);


//Функции
function add(a: number, b: number): number {
    return a + b;
}
let c: number = add(1, 2);
console.log(c);

let func1 = function (a: number, b: number): number {
    return a + b;
}
let d: number = func1(3, 4);
console.log(d);

//Необязательные параметр
function notNeedParameter(needParam: string, notNeedParam?: string){
    console.log(needParam);
    if(notNeedParam){
        console.log(notNeedParam);
    }
}

//Необязательный параметр с значением по умолчанию
function notNeedParamDefault(needParam: string, notNeedParam: string='Значение по умолчанию'){
    console.log(needParam);
    console.log(notNeedParam);
}

function arrayParams(needParams: string, ...arrayParams: string[]){
    console.log(arrayParams);
}

arrayParams("need", "notNeed1", "notNeed2");

//Перазагрузка функций
function addReload(a: number, b: number): number;
function addReload(a: string, b:string): string;
function addReload(a: any,b: any): any{
    return a + b;
}
console.log(addReload("a", "b"));
console.log(addReload(1,2));

//Переменная как функция
let varAsFunction: (a: number, b: number) => number;
varAsFunction = function (c: number, d: number): number {
    return c + d;
};
console.log(varAsFunction(1, 2));
varAsFunction = function (c: number, d: number): number {
    return c * d;
}
console.log(varAsFunction(1, 2));

//Функции обратного вызова
function myFunction(a: number, b: number, calcFunction: (a: number, b: number) => number): void {
    console.log(calcFunction(a, b));
}
//Классическое создание функции
//let myCalcFunction = function (a: number, b: number): number {
//     return a - b;
// };
//Создание функции с помощью лямбда-выражений
let myCalcFunction = (a: number, b: number) => {
    return a - b;
};
myFunction(1, 2, myCalcFunction);

//КЛАССЫ

//Класс со статической переменной
class CalcUtil{
    static PI: number = 3.14;

    static getSquare(radius: number): number{
        return CalcUtil.PI * radius * radius;
    }
}

console.log("Площадь круга с радиусом 30 равна" + CalcUtil.getSquare(30));
