 import './App.css';
 import React from 'react';
 import MyHeader from './MyHeader';
 import Counter from './Counter';

function App() { 
  const counterProps={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    initialValue:5,
  }
  return (
    //태그를 쓰고 싶지 않다면
    <React.Fragment>
    {/* <div className="App"> */}
      <MyHeader/>
      <Counter {...counterProps}/>
    {/* </div> */}
    </React.Fragment>
  );
}

export default App;
