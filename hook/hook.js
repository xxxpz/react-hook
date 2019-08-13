// hook react 16.8新特性
// 函数式编程， 在不用class的时候，可以是使用state和其他的特性

import React, { useState, useEffect } from "react";

function Header() {
  const [count, setCount] = useState(1); // useState()括号中是count的初始值
  useEffect(() => {
    // useEffect有俩个参数， 第一个参数是一个函数， 第二个参数是一个数组
    console.log("12"); // useEffect 相当于class函数中的componentDidMount和componentWillUnmount和componentWillreceiveProps

    // useEffect会返回一个函数和componentWillUnmount的作用一样，但是要根据第二个参数传入的值来
  }, [count]);
  // setCount可以传入一个函数或者是一个和初始值一样类型的值
  return <div onClick={() => setCount(2)}>{count}</div>;
}
