

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
//  import Parent from './Parent';
//  import Child from './Child';
//map function
// const cars = ["Ford", "BMW", "Audi"];
function App() {
  const handleChange = (event) =>{
    console.log(event.target.value);
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  // const handleSubmit = (event) =>{
  //   localStorage.setItem("name",name)
  //   localStorage.getItem("name")
  // }
  // const handleSubmit=(x)=>{
  //   alert(x)
  // let demo=false;
  // if(demo){
  //   return <Parent/>
  //   }
  //   else{
  //     return <Child/>
      
  //   }
    // let bool=true;
  // let x=5;
  return (
     // <div className= "App"><Test/></div>
    // <div><Parent/></div>
    <div>
      <form>
        <label>Enter the Name</label>
        <input type="text" name="name" onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {/* <ul>
        {cars.map((car) => (
          <li>{car}</li>
        ))}
      </ul> */}
       {/* <h1>{demo ?<Parent/> :<Child/>}</h1> */}
       {/* <h1>{bool ? <Parent/>:<Child/>}</h1> */}
       {/* <h1>{x<=10 ? "true" : "false"}</h1> */}
    </div>
  )
}
   

export default App;