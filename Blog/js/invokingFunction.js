/* eslint-disable */
function greet(message, someone) {
    console.log(`${message}, ${this.name}, ${someone}`);
}

const person = { name: 'John' };

// 使用call調用greet，將this設定為person對象
greet.call(person, 'Hello', 'Aiden');

// 使用apply調用greet，將this設定為person對象，參數以陣列形式傳入
greet.apply(person, ['Hello', 'Aiden']);

// 使用bind綁定this，返回一個新的函數greetJohn，參數依序帶入，因此Andy並不會被傳入greetJohn
const greetJohn = greet.bind(person, 'Hello');
greetJohn('Aiden', 'Andy');

// 輸出皆為: Hello, John, Aiden

// 使用call調用函數時，若將this設定為純值，將會因為建構式的關係被封裝為object的型別
greet.call(1, 'Hello', 'Aiden');
greet.call('文字', 'Hello', 'Aiden');

// 在非嚴格模式下，null、undefined將會被替換為全域變數(window)
greet.call(null, 'Hello', 'Aiden');
greet.call(undefined, 'Hello', 'Aiden');

