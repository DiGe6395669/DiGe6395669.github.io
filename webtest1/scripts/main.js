// 设置图片切换：
let myImage = document.querySelector('img');     //此时let的数据类型是对象

myImage.onclick = function() {     //点击事件，匿名函数内是点击后要执行的代码

        let mySrc = myImage.getAttribute('src');

        if(mySrc === 'images/man.jpg') {
	myImage.setAttribute ('src','images/man2.jpg');
        } else {
	 myImage.setAttribute ('src','images/man.jpg');
        }
};

// 移除所有存储
//localStorage.clear();

//设置个性化欢迎信息： 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
         let myName = prompt('请输入你的名字。');

         /*localStorage.setItem('name', myName);//保存当前用户名：备注1
            myHeading.innerHTML = 'Monsters 这首歌很好听，这很适合他:' + myName;*/

         if(!myName || myName === null) {//排除空名和null
              setUserName();
         } else {
             localStorage.setItem('name', myName);
             myHeading.innerHTML = 'Monsters 这首歌很好听，这很适合他:' + myName;
         }

}
//备注1： 调用 localStorage API ，它可以将数据存储在浏览器中供后续获取。这里用localStorage 	                的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
        setUserName();
};

// 初始化代码：在页面在次次读取时进行构造工作：
if(!localStorage.getItem('name')) {
         setUserName();
} else {
         let storedName = localStorage.getItem('name');
         myHeading.textContent = 'Monsters 这首歌很好听，这很适合他:' + storedName;
}
