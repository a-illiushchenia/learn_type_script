var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var employee = {
    id: 1,
    name: "Alice",
    age: 23
};
var manager = {
    id: 2,
    name: "Tom"
};
console.log(manager.age);
var Car = (function () {
    function Car() {
    }
    Car.prototype.fill = function () {
        console.log("Fill car");
    };
    Car.prototype.move = function () {
        console.log("Move car. Speed: " + this.speed);
    };
    return Car;
}());
var auto = new Car();
auto.speed = 300;
auto.fill();
auto.move();
var simpleBuilder = function (name, surname) {
    return "Mr. " + name + " " + surname;
};
var fullName = simpleBuilder("Aliaksandr", "Illiushchenia");
console.log(fullName);
var colors = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
console.log(colors["red"]);
function personBuilder() {
    //код реализации конструктора
    var person = function (name, surname) {
        person.fullName = name + " " + surname;
    };
    //на выходе получил не класс, а уже ГОТОВЫЙ ОБЪЕКТ
    //код реализации метода
    person.authenticate = function () {
        console.log(person.fullName + " enter in system with password " + person.password);
    };
    //возврат готового объекта
    return person;
}
var aleks = personBuilder();
aleks("Aliaksand", "Illiushchenia");
aleks.password = "myPath";
aleks.authenticate();
//ПРЕОБРАЗОВАНИЕ ТИПОВ
var User = (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Employer = (function (_super) {
    __extends(Employer, _super);
    function Employer(name, companyName) {
        _super.call(this, name);
        this.companyName = companyName;
    }
    return Employer;
}(User));
function getUserName(user) {
    return user.name;
}
function userFactory(name) {
    return new Employer(name, "undefined");
}
var alice = new Employer("Alice", "TCP");
var userName = getUserName(alice);
console.log(userName);
var tom = userFactory("Tom");
userName = getUserName(tom);
console.log(userName);
var alice1 = new Employer("Alice1", "TCP1");
console.log(alice1.companyName);
console.log(alice1.companyName);
function getUserName1(user) {
    return user.name;
}
console.log(getUserName1(alice1));
//Принадлежность к классу
if (alice1 instanceof User) {
    console.log("Alice1 is User");
}
else {
    console.log("Alice1 is not User");
}
//вернет "Alice1 is User" => проверка выполняется вверх по иерархии.
//МОДИФИКАТОРЫ И МЕТОДЫ ДОСТУПА
var User1 = (function () {
    function User1() {
    }
    Object.defineProperty(User1.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return User1;
}());
var user1 = new User1();
user1.name = "Aliaksand1";
console.log(user1.name);
//ОБОБЩЕНИЯ
var User2 = (function () {
    function User2(id) {
        this._id = id;
    }
    return User2;
}());
var user2 = new User2(123);
console.log(user2._id);
var user21 = new User2("str");
console.log(user21._id);
//МИКСИНЫ - возможно множественное наследование от КЛАССОВ
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.feed = function () {
        console.log("feed animal");
    };
    return Animal;
}());
var Transport = (function () {
    function Transport() {
        this.speed = 0;
    }
    Transport.prototype.move = function () {
        if (this.speed == 0) {
            console.log("Stay");
        }
        else {
            console.log("Move with speed " + this.speed);
        }
    };
    return Transport;
}());
var Horse = (function () {
    function Horse() {
        this.speed = 0;
    }
    return Horse;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(Horse, [Animal, Transport]);
var pony = new Horse();
pony.feed();
pony.move();
pony.speed = 4;
pony.move();
//ПРОСТРАНСТВО ИМЕН
var UserNamespace;
(function (UserNamespace) {
    var User3 = (function () {
        function User3(id, name) {
            this._id = id;
            this._name = name;
        }
        User3.prototype.displayInfo = function () {
            console.log("id: " + this._id + "; name: " + this._name);
        };
        return User3;
    }());
    UserNamespace.User3 = User3;
    var defaultUser3 = new User3(2, "Tom");
})(UserNamespace || (UserNamespace = {}));
var alice3 = new UserNamespace.User3(4, "Alice3");
alice3.displayInfo();
//вложенное пространство имен
var UserNamespace;
(function (UserNamespace) {
    var Employees;
    (function (Employees) {
        var Employee3 = (function (_super) {
            __extends(Employee3, _super);
            function Employee3() {
                _super.apply(this, arguments);
            }
            return Employee3;
        }(UserNamespace.User3));
        Employees.Employee3 = Employee3;
        var Manager = (function (_super) {
            __extends(Manager, _super);
            function Manager() {
                _super.apply(this, arguments);
            }
            return Manager;
        }(UserNamespace.User3));
        Employees.Manager = Manager;
    })(Employees = UserNamespace.Employees || (UserNamespace.Employees = {}));
})(UserNamespace || (UserNamespace = {}));
var bill = new UserNamespace.Employees.Employee3(5, "Bill");
bill.displayInfo();
//псевдонимы
var employee3 = UserNamespace.Employees.Employee3;
var bill3 = new employee3(6, "Bill3");
bill3.displayInfo();
//Слияние модулей
var UserNamespace4;
(function (UserNamespace4) {
    var User4 = (function () {
        function User4() {
        }
        return User4;
    }());
    UserNamespace4.User4 = User4;
    var defaultUser4 = new User4();
})(UserNamespace4 || (UserNamespace4 = {}));
//bla-bla-bla
var UserNamespace4;
(function (UserNamespace4) {
    var Employee4 = (function (_super) {
        __extends(Employee4, _super);
        function Employee4() {
            _super.apply(this, arguments);
        }
        return Employee4;
    }(UserNamespace4.User4));
    UserNamespace4.Employee4 = Employee4;
})(UserNamespace4 || (UserNamespace4 = {}));
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
var Utility = (function () {
    function Utility() {
    }
    Utility.displayGlobalVar = function () {
        console.log(globalVar);
    };
    return Utility;
}());
window.onload = function () {
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
//# sourceMappingURL=app.js.map