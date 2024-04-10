/* eslint-disable */
/*
1. promise很常用來處理AJAX的行為，所有非同步行為也都適合
2. 要使用AJAX會使用到套件：jQuery、axios(AJAX是基於promise的遠端請求工具)(axios：https://github.com/axios/axios)
3. Promise是一個物件函式，有下列狀態
    pending 未確認狀態
    settled 已確認狀態(2)
        -fulfilled 已實現狀態 (resolve)
        -rejected 已否決狀態 (reject)

*/

// axios使用方式
axios.get(url)
    .then((res) => {
        console.log(1, res);
        const seed = res.data.info.seed;
        return axios.get(`${url}?seed=${seed}`)
    })
    .then((res2) => {
        console.log(2, res2);
    });

// Promise.all：解決回呼地獄、寫法不一致、無法同步執行等問題
Promise.all([axios.get(url), axios.get(url)])
    .then(([res, res2]) => {
        console.log(res, res2)
    })

// Promise的使用概念(實際上不會這樣用)
const successPromise = new Promise((resolve, reject) => {
    resolve('成功');
});

// 使用then接受成功的結果，需用callback function
successPromise.then((res) => {
    console.log(res);  // 成功
});

const failPromise = new Promise((resolve, reject) => {
    reject('失敗');
});

// 使用catch接受失敗的結果，需用callback function
successPromise.catch((res) => {
    console.log(res);  // 失敗
});

// 範例一
function promiseFn(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                resolve(`成功:${num}`);
            } else {
                reject('失敗');
            }
        }, 10);
    })
}

promiseFn(1)
    .then((res) => {
        console.log(res);
    })
    .catch((res) => {
        console.log(res);
    })

// Promise Chain (return的結果會在下一個then出現)
promiseFn(1)
    .then((res) => {
        console.log(res);
        return promiseFn(2);
    })
    .then((res) => {
        console.log(res);
        return promiseFn(3);
    })
    .catch((res) => {
        console.log(res);
        return promiseFn(3);
    })
    // catch到錯誤後會繼續往下個then跑
    .then((res) => {
        console.log(res);
    })

promiseFn(1)
    .then((res) => {
        console.log('success', res)
    }, (rej) => {
        console.log('fail', rej)
    })

// 範例二
function promiseFn2(num, time = 500) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                resolve(`成功:${num}`);
            } else {
                reject('失敗');
            }
        }, time);
    })
}

// 會等陣列內所有的非同步行為完成，就可以使用then來接收結果
Promise.all([
    promiseFn2(1, 500),
    promiseFn2(1, 1000),
    promiseFn2(1, 2000)
])
    .then((res) => {
        console.log(res);
    })
    // 只要有一個失敗就會進入catch
    .catch((res) => {
        console.log(res);
    })

// Promise.race會回傳第一個完成的結果，
Promise.race([
    promiseFn2(1, 1000),
    promiseFn2(2, 500),
    promiseFn2(3, 2000)
])
    .then((res) => {
        console.log(res);   // 成功:2
    })
    // 只有第一個失敗才會進入catch
    .catch((res) => {
        console.log(res);
    })

// AJAX應用
var url = 'https://jsonplaceholder.typicode.com/todos/1';

// 原AJAX定義方式
// 定義 Http request(Web API)
//   var req = new XMLHttpRequest();

// 定義方法
//   req.open('GET', url);

// 當請求完成，則進行函式的結果
//   req.onload = function () {
//     if (req.status == 200) {
//       // 成功直接列出結果
//       console.log(req.response);
//     } else {
//       // 失敗的部分
//     }
//   };

// 送出請求
//   req.send();

function get(url) {
    return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();

        // 定義方法
        req.open('GET', url);

        // 當請求完成，則進行函式的結果
        req.onload = function () {
            if (req.status == 200) {
                // 成功直接列出結果
                resolve(req.response);
                // console.log(req.response);
            } else {
                // 失敗的部分
                reject(req);
            }
        };

        // 送出請求
        req.send();
    })
}

get(url)
    .then(res => {
        console.log('get', res)
        return get(url);
    })
    .then(res => {
        console.log('get2', res)
    })
    .catch(err => {
        console.log(err)
    })




