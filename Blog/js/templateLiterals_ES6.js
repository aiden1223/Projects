/* eslint-disable */
// 樣板字面值 (Template Literals)
const myName = 'Aiden';

const normalSentence = '大家好我是' + myName + '請多指教';
const es6sentence = `大家好我是${myName}請多指教`;

// 可以帶預設值
const es6sentence1 = `大家好我是${myName || 'abc'}請多指教`;

// 傳統字串需要換行字串
const listString = '<ul>\
<li>'+ myName + '</li>\
<li>lucy</li>\
</ul>';

// Template Literals不用加換行符號
const listString2 = `<ul
<li>${myName}</li>
<li>lucy</li>
</ul>`;

// 巢狀結構
const people = [
    {
        name: 'aiden',
        cash: 1000
    },
    {
        name: 'lucy',
        cash: 500
    },
    {
        name: 'andy',
        cash: '300'
    }
]

const listString3 = `<ul>
    ${people.map((person) => `<li>我是 ${person.name} ，身上有 ${person.cash} 元</li>`).join('')}
</ul>`;

// 標籤模板字面值
function greeting(strings, userName, userStatus) {
    const statusMessage = userStatus ? "在线" : "离线";
    return `${strings[0]}${userName}${strings[1]}${statusMessage}${strings[2]}`;
}

const user = "Alice";
const _status = true;

// strings是一個Array，依變數去切割
const result = greeting`欢迎，${user}！你当前状态为：${_status}。`;

console.log(result);
// 输出: 欢迎，Alice！你当前状态为：在线。

