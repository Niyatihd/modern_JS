// alert("Hello!!");

//Note:
//1. // Single line comment
//2.
/*
      Multi line comment
    */
//3.
console.log("abc");
console.log(123);
console.log(true);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });
console.error("this is an error");
console.clear();
console.warn("this is a warning");
//4.
//The piece of code below gives us the time it takes to log all "hello world"s
console.time("hello");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.timeEnd("hello");
//5. var, let, const
// variable rules:
// 1. variable names can only include letters, numbers,         underscore _, dollar sign $
// 2. variable names cannot start with a number
// 3. $ is not recommended unless you are using Jquery
// 3. _ is not recommended unless you are using private         variables
// 4. Use camelCase for mutli words
// other cases: PascalCase, snake_case (Not recommended for JS)
// class names and constructor functions use PascalCase
// 5. var and let CAN initializes without a value
// 6. const CANNOT initializes without a value
