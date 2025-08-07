// --~ 常量 ~--
// 数字: 整数, 小数, 科学计数
3.14
1001
123e5

// 字符串: 单引号, 双引号
"Hello, World!"
'JavaScript is fun!'

// 表达式
1 + 2
"Hello, " + "World!"

// 数组
[1, 2, 3, 4, 5]

// 对象
const person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

// 函数
function greet(name) {
    return "Hello, " + name + "!";
}

// --~ 变量 ~--
// 使用 var 定义变量
var x = 10;
var x = 11;
var y = 20;

// 使用 let 定义变量
let a = 1;
// let a = 1;
let b = 2;

// 使用 const 定义常量
const PI = 3.14;
console.log(PI);

// 换行
var c = "ab\
cd";
console.log(c);

// --~ 动态类型 ~--
let s;
s = 123;
console.log(typeof s); // number
s = "Hello";
console.log(typeof s); // string
s = true;
console.log(typeof s); // boolean
s = null;
console.log(typeof s); // object
s = undefined;
console.log(typeof s); // undefined
s = Symbol("unique");
console.log(typeof s); // symbol
s = [1, 2, 3];
console.log(typeof s); // object
s = { name: "Alice" };
console.log(typeof s); // object
