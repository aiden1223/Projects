/* eslint-disable */
var wallet = {
    total: 100,
    // Setter方法: 定義一個屬性(save)
    set save(price) {
        this.total = this.total + price;
        console.log(`已存入${price}，現在錢包共有:${this.total}元`);
    },
    // Getter方法: 定義一個物件屬性(obtain)的讀取方式
    get obtain() {
        this.total = this.total * 1.02;
        return console.log(`活存利率2%，現在錢包共有:${this.total}元`);
    }
}

// Setter方法:save。當這個屬性被賦值時，會執行一段特定的代碼，參數會被賦予等號右邊的值(300)
wallet.save = 300;

// Getter方法:obtain
console.log(wallet.obtain);

// 其他定義方式：
Object.defineProperty(wallet, 'save', {
    // 此方式定義，下方特徵會被改為false，需手動調成true
    configurable: true,
    enumerable: true,
    set: function (price) {
        this.total = this.total + price;
        console.log(`已存入${price}，現在錢包共有:${this.total}元`);
    },
    get: function () {
        this.total = this.total * 1.02;
        return console.log(`活存利率2%，現在錢包共有:${this.total}元`);
    }
})