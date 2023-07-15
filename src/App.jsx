import { useRef } from "react";


const App = () => {
  let ApiData = useRef(null);
  let myPtag = useRef();

 const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    ApiData.current = await response.json();
    console.log(ApiData.current);
 }
 
 const showData = () => {
  myPtag.current.innerText = JSON.stringify(ApiData.current);
 }

  return (
    <div className="container">
      <p ref={myPtag}></p>
      <button className="btn btn-primary" onClick={fetchData}>Click Me!</button>
      <button className="btn btn-warning" onClick={showData}>Show Data</button>
    </div>
  );
};

export default App;