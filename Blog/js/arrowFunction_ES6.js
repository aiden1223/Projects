/* eslint-disable */
/////////////////////////////////////箭頭函式的省略//////////////////////////////////////
// 定義一function
const callName = function (someone) {
    return `我是${someone}`
}

// 1. 將function移除，並加上=>
const callName1 = (someone) => {
    return `我是${someone}`
}

// 2. 如果程式碼內容為表達式(回傳一結果)時，可將{}及return移除
const callName2 = (someone) => `我是${someone}`;

// 3. 如果只有一個參數，可以把參數外()移除
const callName3 = someone => `我是${someone}`;
// 多個或沒有參數時則不能省略
const callName4 = () => `我是艾登`;
const callName5 = (a, b) => `我們是${a}和${b}`;

////////////////////////////////////箭頭函式的差異///////////////////////////////////////
///// 1. 沒有arguments參數(類陣列object)
// 傳統函式:
const nums = function () {
    console.log(arguments);
}
nums(1, 2, 3, 4, 5);

// 箭頭函式: 改使用其餘參數arg(Array)
const nums2 = (...arg) => {
    console.log(arg);
}
nums2(1, 2, 3, 4, 5);

///// 2. 箭頭函式沒有自己的this
// 傳統函式:
var myName = '全域艾登';
var person = {
    myName: '艾登',
    callName: function () {
        console.log(1, this.myName); // 1 艾登
        setTimeout(function () {
            console.log(2, this.myName); // 2 全域艾登
        }, 10)
    }
}

// 箭頭函式1: 使用外層的this，可視為忽略整個箭頭函式去找到外層 
var myName = '全域艾登';
var person = {
    myName: '艾登',
    callName: function () {
        console.log(1, this.myName); // 1 艾登
        setTimeout(() => {
            console.log(2, this.myName); // 2 艾登
        }, 10)
    }
}

// 箭頭函式2:
var myName = '全域艾登';
var person = {
    myName: '艾登',
    callName: () => {
        console.log(1, this.myName); // 1 全域艾登
        setTimeout(() => {
            console.log(2, this.myName); // 2 全域艾登
        }, 10)
    }
}

const ele = document.querySelector('p');
// 傳統函式:
ele.addEventListener('click', function () {
    console.log(this); // <p>這裡有一句話</p>
});

// 箭頭函式:
ele.addEventListener('click', () => {
    console.log(this); // window
});

///// 3. 箭頭函式無法透過 call, apply, bind 重新賦予this
const family = {
    myName: '艾登'
}

const fn = (para1, para2) => {
    console.log(this); // window
}

fn.call(family);

///// 4. 箭頭函式無法作為建構函式使用
const ArrowFn = (a) => {
    this.name = a;
}
const a = new ArrowFn('a'); // Error: ArrowFn is not a constructor

////////////////////////////////////箭頭函式的常見錯誤///////////////////////////////////////
///// 1. 不能直接回傳一物件，要在物件外加上()
//const arrFn = () => {data: 1};
const arrFn = () => ({ data: 1 });

///// 2. 判斷式後面不能直接使用箭頭函式，也要在函式外加()
let num = 0;
//const num1 = num || () => 1;
const num1 = num || (() => 1);

////////////////////////////////////箭頭函式的實際案例///////////////////////////////////////
const arrDouble = arr.map(num => num * 2);

// 傳統函式:
const average = function () {
    //因為arguments是類陣列，所以要使用Array.from方法轉成純陣列
    const nums = Array.from(arguments);
    //reduce(累加)，參數1:每次執行都會帶入前一個返回值，初始值設定帶入0
    const total = nums.reduce(function (acc, val) {
        return acc + val
    }, 0);
    console.log(total);

    return total / nums.length;
}

// 箭頭函式:
const average1 = (...num) => num.reduce((acc, val) => acc + val, 0) / num.length;
