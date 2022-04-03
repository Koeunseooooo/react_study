 import './App.css';
 import React from 'react';
 import MyHeader from './MyHeader';
 import Counter from './Counter';

function App() {

  let name ='고은서';

  return (
    //태그를 쓰고 싶지 않다면
    <React.Fragment>
    {/* <div className="App"> */}
      <MyHeader/>
      <Counter/>
    {/* </div> */}
    </React.Fragment>
  );
}

export default App;
