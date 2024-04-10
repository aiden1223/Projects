/* eslint-disable */
// 嚴格模式：
// 1. 加入 'use strict' 即可運作
// 2. 並不會影響不支援嚴格模式的瀏覽器
// 3. 可依據[執行環境]設定'use strict'
// 4. 透過拋出錯誤的方式消除一些安靜的錯誤 (防止小錯誤)
// 5. 禁止使用一些有可能被未來版本ECMAScript定義的語法
// 6. this關鍵字的行為變化：在全局作用域中，this不再指向全局對象（在瀏覽器中是window），而是undefined

// 在callStrict函式這個執行環境內運行嚴格模式
function callStrict() {
    'use strict';
    console.log(this, typeof this);
}

callStrict(1);  // 回傳：1 number
callStrict(undefined);   // 回傳：undefined undefined
// 簡易呼叫的this，其本質是undefined，盡可能不要調用
callStrict();   // 回傳：undefined undefined