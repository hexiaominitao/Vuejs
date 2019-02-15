// let myHeading = document.querySelector("h1");
// myHeading.textContent = "hello";
// let myName = "hello";
// if (myName == "hello") {
//   alert("你好！");
// } else {
//   alert("你是煞笔！");
// }
// let sum = function(num1, num2) {
//   let sum1 = num1 + num2;
//   return sum1;
// };
// document.querySelector("html").onclick = function() {
//   alert("点什么啊!");
// };
// document.addEventListener("DOMContentLoaded", function() {
//   function createParagraph() {
//     let para = document.createElement("p");
//     para.textContent = "你点击了这个按钮";
//     document.body.appendChild(para);
//   }
//   const buttons = document.querySelectorAll("button");

//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", createParagraph);
//   }
// });
const gobal = Math.ceil(Math.random() * 100);
let valueInput = 0;
function result() {
  let resultP = document.querySelector("p");
  if (valueInput === gobal) {
    resultP.textContent = "恭喜你猜对了";
  }
  if (resultP > gobal) {
    resultP.textContent = "大了";
  } else {
    resultP.textContent = "小了";
  }
}
const myButton = document.querySelectorAll("button");
myButton.addEventListener("click", result);
