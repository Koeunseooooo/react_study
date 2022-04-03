 import './App.css';
 import React from 'react';
 import MyHeader from './MyHeader';
 import Counter from './Counter';

function App() {

  return (
    //태그를 쓰고 싶지 않다면
    <React.Fragment>
    {/* <div className="App"> */}
      <MyHeader/>
      <Counter a={1} initialValue={5}/>
    {/* </div> */}
    </React.Fragment>
  );
}

export default App;
