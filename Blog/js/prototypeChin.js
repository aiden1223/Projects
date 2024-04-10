/* eslint-disable */
/*
原型鏈(Prototype Chain)
當你試圖訪問一個物件的屬性或方法時，如果該物件本身沒有這個屬性或方法，
JavaScript引擎就會去該物件的原型（也就是prototype屬性指向的物件）中查找。
如果在那裡也找不到，它會繼續查找原型的原型，以此類推，
直到找到為止或到達原型鏈的頂端（Object.prototype的原型是null）。這一系列的鏈結就稱為原型鏈。

原型和構造函數
在JavaScript中，構造函數用來創建特定類型的物件。每當你創建一個函數時，JavaScript都會為這個函數創建一個prototype物件。
當你通過new關鍵字調用這個函數以創建一個新物件時，這個新物件的內部原型（一個內部的[[Prototype]]屬性，可以通過Object.getPrototypeOf()或__proto__屬性來訪問）會被設置為構造函數的prototype物件。

__proto__ 物件上連結繼承來的原型屬性
prototype 函式上的原型
*/

//物件原型Object <- 陣列原型Array <- a(實體)
var a = [];

//String Number等本身就是一個函式物件
var txt = new String('abcd');
String.prototype.lastText = function () {
    return this[this.length - 1];
}
console.log(b.lastText());   //d

// 建構函式
function Dog(name, color, size) {
    Animal.call(this, '犬科');
    this.name = name;
    this.color = color;
    this.size = size;
}

function Cat(name, color, size) {
    Animal.call(this, '貓科');
    this.name = name;
    this.color = color;
    this.size = size;
}

function Animal(family) {
    this.kingdom = '動物界';
    this.family = family || '人科';
}

// 新增給Animal的原型函數一個move方法
Animal.prototype.move = function () {
    console.log(`${this.name}移動`);
}

// Object <- Animal <- Dog/Cat
// 讓Dog、Cat去繼承Animal原型物件
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // 將Dog被Animal覆蓋掉的constructor(建構函式)給還原
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat; 


// Object <- Animal <- Dog/Cat <- Bibi/Pipi
// 產生新物件，並將Dog作為原型來使用
var Bibi = new Dog('比比', '棕色', '小');
var Pipi = new Cat('屁屁', '米色', '小');

// 新增給Dog的原型函數一個bark方法，Cat不能使用
Dog.prototype.bark = function () {
    console.log(`${this.name}吼叫`);
}

console.log(Dog.bark());  // 比比吼叫
console.log(Cat.bark());  // undefined

//所有物件(Dog/Animal/Object/Function等)的原型都是繼承Function的prototype
console.log(Dog.__proto__ === Function.prototype);  //true
console.log(Function.__proto__.__proto__ === Object.prototype);  //true

// 確認物件內是否有此屬性
Bibi.hasOwnProperty('name');




