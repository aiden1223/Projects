/* eslint-disable */
/*
let 與 const 是區塊作用域(block scope)，區塊就是在大括號內 { } 。
var 是函式作用域(function scope)。

var 定義了一個全域變數，或是在整個 function 而不管該區塊範圍
let 宣告只能在目前區塊、階段或表達式中作用的變數
const 宣告的是常數(不可變更)，常數在被宣告時就務必要指定給值
*/

//用var則僅會顯示第10次，若改用let則每次都會顯示
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(`執行第${i}次`);
    }, 1000);
}

// var 會提升到函式作用域的頂部，或是全局作用域頂部
// let 和 const 僅會提升到其所在的區塊作用域頂部(暫時性死區)，無法取得

var myName; // hoisting

{
    /* 暫時性死區(TDZ)
    let yourName;  // hoisting
    const hisName; // hoisting
    */
    
    // 執行
    console.log(myName); // undefined
    console.log(yourName); // 無法呼叫
    console.log(hisName); // 無法
    /*var hoisting*/ myName = 'aiden'; 
    /*let hoisting*/ yourName = 'lucy'; 
    /*const hoisting*/ hisName = 'andy'; 

}