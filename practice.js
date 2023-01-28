// // 原型链
// function F(){}
// Object.prototype.a = function(){
//     console.log('a')
// }
// Function.prototype.b = function(){
//     console.log('b')
// }
// var f = new F()
// f.a()
// // a
// // f.b()
// // undefine
// F.a()
// // a
// F.b()
// // b
// console.log(Object.__proto__ === Function.prototype)
// f.__proto__.__proto__.constructor.b()

// console.log(typeof typeof 1)

// function unique(arr){
//     return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
// }
// var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr));

// async function async1() {

//     console.log('async1 start')
  
//     await async2()
  
//     console.log('async1 end')
  
//   }
  
//   async function async2() {
  
//     console.log('async2')
  
//   }
  
//   console.log('script start')
  
//   setTimeout(function () {
  
//     console.log('settimeout')
  
//   })
  
//   async1()
  
//   new Promise(function (resolve) {
  
//     console.log('promise1')
  
//     resolve()
  
//   }).then(function () {
  
//     console.log('promise2')
  
//   })
  
//   console.log('script end')

// var company = {
//     address: 'beijing'
// }
// var yideng = Object.create(company);
// delete yideng.address
// console.log(yideng.address);
// console.log(Object);

function fun(){
    name = '111',
    change = function(){
        console.log('change')
    }
}

let f = new fun();
console.log(f.name);
f.change();