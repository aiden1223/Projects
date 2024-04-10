/* eslint-disable */
// 建立具有 Promise 的函式（可帶參數）
function promiseFn(num) {
    // 這裡可以插入其它程式碼
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num) {
          resolve('成功');
        } else {
          reject(new Error('失敗'));
        }
      }, 0);
    });
  }

  // Promise 寫法
  // promiseFn(1)
  //   .then((res) => {
  //     console.log(res);
  //     return promiseFn(1);
  //   })
  //   .then((res) => {
  //     console.log(2, res);
  //   })
  //   .catch((err)=> {
  //     console.log(err);
  //   })

  // Async 函式(變成逐行執行)
  // async function asyncFn() {
  //   console.log(1);
  //   const res = await promiseFn(1); // Promise
  //   console.log(2, res);
  //   const res2 = await promiseFn(1);
  //   console.log(3, res2);
  // }
  // asyncFn();

  // const asyncArrowFn = async () => {

  // }

  // Async Function 錯誤捕捉
  (async () => {
    try {
      const res = await promiseFn(0);
      console.log(res);
    } catch (error) {
      console.log('error:', error);
    }
  })(); // IIFE 立即函式
