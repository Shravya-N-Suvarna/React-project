

// function App() {
//   return (
//     <div >
//       <h1>Accelerlab Soutions {5+5} Moodbidri</h1>
//     </div>
//   );
// }

// export default App;
import React from 'react'
// import Test from './test';
 import Parent from './Parent';
 import Child from './Child';
function App() {
  // const handleSubmit=(x)=>{
  //   alert(x)
  // let demo=false;
  // if(demo){
  //   return <Parent/>
  //   }
  //   else{
  //     return <Child/>
      
  //   }
    let bool=true;
  
  return (
     // <div className= "App"><Test/></div>
    // <div><Parent/></div>
    <div>
       {/* <h1>{demo ?<Parent/> :<Child/>}</h1> */}
       <h1>{bool ? <Parent/>:<Child/>}</h1>
    </div>
  )
}
   

export default App;