import React from 'react'

function Test() {
    let x=5;
    // let text="good bye"
    // if(x>10){
    //     text="Hello";
    // }
    

  return (
    <div className= "test">
        <h1> {x<10? "goodbye" : "Hello"}</h1>
        </div>
  );
}
export default Test;