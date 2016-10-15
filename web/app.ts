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

//ИНТЕРФЕЙСЫ

//Необязательные параметры
interface  IUser{
    id: number;
    name: string;
    age?: number;
}

let employee: IUser = {

    id: 1,
    name: "Alice",
    age: 23
}

let manager: IUser = {

    id: 2,
    name: "Tom"
}

console.log(manager.age);

//Наследование интерфейсов
interface  IMovable {
    speed: number;
    move(): void;
}

interface ICar extends IMovable{
    fill();
}

class Car implements ICar{
    speed: number;

    fill() {
        console.log("Fill car");
    }

    move(): void {
        console.log("Move car. Speed: " + this.speed);
    }

}

let auto = new Car();
auto.speed = 300;
auto.fill();
auto.move();

//Интерфейсы функций
interface FullNameBuilder{
    (name: string, surname: string): string;
}

let simpleBuilder: FullNameBuilder = function (name: string, surname: string): string {
    return "Mr. " + name + " " + surname;
}

let fullName = simpleBuilder("Aliaksandr", "Illiushchenia");
console.log(fullName);

//Интерфейсы массивов
interface Dictionary{
    [index: string]: string;
}

var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";

console.log(colors["red"]);

//Гибридные интерфейсы - НУЖНО ПРИВЫКНУТЬ К СИНТАКСИСУ!!!
interface  PersonInfo{
    //конструктор
    (name: string, surname: string): void;
    //поля
    fullName: string;
    password: string;
    //метод
    authenticate(): void;
}

function personBuilder(): PersonInfo{
    //код реализации конструктора
    let person = <PersonInfo>function (name: string, surname: string): void {
        person.fullName = name + " " + surname;
    }
    //на выходе получил не класс, а уже ГОТОВЫЙ ОБЪЕКТ

    //код реализации метода
    person.authenticate = function () {
        console.log(person.fullName + " enter in system with password " + person.password);
    }
    //возврат готового объекта
    return person;
}

let aleks = personBuilder();
aleks("Aliaksand", "Illiushchenia");
aleks.password = "myPath";
aleks.authenticate();

//ПРЕОБРАЗОВАНИЕ ТИПОВ


class User{
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

class Employer extends User{
    companyName: string;
    constructor(name: string, companyName: string){
        super(name);
        this.companyName = companyName;
    }
}

function getUserName(user: User): string{
    return user.name;
}

function userFactory(name: string): User{
    return new Employer(name, "undefined");
}

let alice: Employer = new Employer("Alice", "TCP");
let userName = getUserName(alice);
console.log(userName);

let tom = userFactory("Tom");
userName = getUserName(tom);
console.log(userName);

let alice1: User = new Employer("Alice1", "TCP1");
console.log((<Employer>alice1).companyName);
console.log((alice1 as Employer).companyName);

//Классы User и Employer не реализуют интерфейс IUser1, но имеют одинаковый параметр,
// поэтому их экземпляры могут быть переданы на вход функции  getUserName1();
interface IUser1{
    name: string;
}

function getUserName1(user: IUser1){
    return user.name;
}

console.log(getUserName1(alice1));

//Принадлежность к классу
if(alice1 instanceof User){
    console.log("Alice1 is User");
}else{
    console.log("Alice1 is not User");
}
//вернет "Alice1 is User" => проверка выполняется вверх по иерархии.

//МОДИФИКАТОРЫ И МЕТОДЫ ДОСТУПА


class User1{
    private _name: string;

    public get name(): string{
        return this._name;
    }

    public set name(name: string){
        this._name = name;
    }
}

let user1: User1 = new User1();
user1.name = "Aliaksand1";
console.log(user1.name);

//ОБОБЩЕНИЯ
class User2<T>{
    _id: T;
    constructor(id: T){
        this._id = id;
    }
}

let user2: User2<number> = new User2(123);
console.log(user2._id);
let user21: User2<string> = new User2("str");
console.log(user21._id);

//МИКСИНЫ - возможно множественное наследование от КЛАССОВ
class Animal{
    feed(): void{
        console.log("feed animal");
    }
}

class Transport{
    speed: number=0;
    move(){
        if(this.speed == 0){
            console.log("Stay");
        }else {
            console.log("Move with speed " + this.speed);
        }
    }
}

class Horse implements Animal, Transport{
    speed: number=0;
    feed: () => void;
    move: () => void;
}

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    })
}

applyMixins(Horse, [Animal, Transport]);

let pony: Horse = new Horse();
pony.feed();
pony.move();
pony.speed = 4;
pony.move();

//ПРОСТРАНСТВО ИМЕН
namespace UserNamespace{
    export interface IUser3{
        displayInfo();
    }

    export class User3 implements IUser3{

        private _id: number;
        private _name: string;
        constructor(id: number, name: string){
            this._id = id;
            this._name = name;
        }

        displayInfo() {
            console.log("id: " + this._id + "; name: " + this._name);
        }
    }

    let defaultUser3: IUser3 = new User3(2, "Tom");
}


let alice3 = new UserNamespace.User3(4, "Alice3");
alice3.displayInfo();

//вложенное пространство имен
namespace UserNamespace.Employees{

    export class Employee3 extends User3{

    }

    export class Manager extends User3{

    }
}

let bill = new UserNamespace.Employees.Employee3(5, "Bill");
bill.displayInfo();

//псевдонимы
import employee3 = UserNamespace.Employees.Employee3;
let bill3 = new employee3(6, "Bill3");
bill3.displayInfo();

//Слияние модулей
namespace UserNamespace4{
    export class User4{}

    let defaultUser4: User4 = new User4();
}
//bla-bla-bla
namespace UserNamespace4{
    export class Employee4 extends User4{

    }

    // export function getDefaultUser(): User4{
        // return defaultUser4;
    // }
}
//оба пространства UserNamespace4 сольются в одно, но defaultUser4 (закоментировано) во второй части
// виден не будет, покуда в первой части не написать export.
// Не понятна логика - вроде пространства сливаются, но ведут себя, как отдельный!!!


//МОДУЛИ

//не работает - по ходу ножно собирать через сборщик
// import {Smartphone} from "./mobiles";
// let iphone: Smartphone = new Smartphone();
// iphone.company = "Apple";
// iphone.model = "iPhone 7";
// iphone.displayInfo();

class Utility {
    static displayGlobalVar() {

        console.log(globalVar);
    }
}

window.onload = () => {

    Utility.displayGlobalVar();

};

//ЗАГОЛОВОЧНЫЕ ФАЙЛЫ
//Заголовочные файлы для популярных библиотек
//Создал папку Scripts. В нее поместил JQuery. В нее поместил папку typings. В папку typings
// поместил заголовочный файл для JQuery.

//не работает - по ходу ножно собирать через сборщик
// $(document).ready(() => {
//     $("#content").html("<h1>Привет мир</h1>");
// });