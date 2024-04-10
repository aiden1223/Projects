/* eslint-disable */
//物件:person, 屬性:aiden等, 特徵:value等
var person = {
    aiden: '艾登',
    andy: '安迪',
    lucy: '安琪'
}

//定義屬性，並調整屬性的特徵，也可直接新增屬性

//調整單一屬性Object.defineProperty(物件, 屬性, 特徵物件);
Object.defineProperty(person, 'lucy', {
    vaule: '天才安琪',
    //可否被寫入
    writable: true,
    //可否被刪除
    configurable: true,
    //可否被列舉
    enumerable: true
});

//調整多個屬性Object.defineProperties(物件, 屬性物件)
Object.defineProperties(person, {
    'aiden': {
        value: '天才艾登'
    },
    'lucy': {
        writable: false
    }
});

// 列舉物件內特定屬性的特徵
Object.getOwnPropertyDescriptor(person, 'aiden');


// 防止擴充，物件內屬性的特徵不會改變
Object.preventExtensions(person);
// 物件是否可被擴充
Object.isExtensible(person);

// 封裝
// 物件內屬性的特徵會被改變(configurable:false)，物件屬性無法新刪，也無法修改屬性特徵，但可修改屬性value
Object.seal(person); // 預設已含preventExtensions不可擴充特性
// 物件是否被封裝
Object.isSealed(person);

// 凍結
// 無法修改屬性value
Object.freeze(person); // 預設已含seal的特性
// 物件是否被凍結
Object.isFrozen(person);




