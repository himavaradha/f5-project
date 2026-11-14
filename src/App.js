import N from "./n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home"
import Contact from "./contact";
import Summary from "./summary";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <N />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/summary" element={<Summary/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// import { useEffect, useState } from "react";
// const App = () => {
//   const [count, setcount] = useState(0);
//   const inc = () => {
//       setcount(count + 1);
//       // document.title="AIDSB"
//   };
//   useEffect(()=>{
//     console.log(count)
//     document.title=`count is ${count}`
//   })

//   return (
//     <>
//       <h1>AIDSB</h1>
//       <h1>{count}</h1>
//       <button onClick={inc}>Inc</button>
//     </>
//   );
// };

// export default App;
