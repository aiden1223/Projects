/* eslint-disable */
/* 
HTML-針對DOM元素操作上的this
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

<button onclick="console.log(this)">按鈕</button>
按下後回傳這個button元素：<button onclick="console.log(this)">按鈕</button>

<button onclick="console.dir(this)">按鈕</button>
按下後回傳這個button物件：button(object){...}
*/

var fn = function(){
    console.dir(this);
    //被點擊的li背景會變成橘色
    this.style.backgroundColor = 'orange';
}

var els = document.querySelectorAll('li');

for (var i = 0; i < els.length; i++){
    els[i].addEventListener('click', fn)
}
