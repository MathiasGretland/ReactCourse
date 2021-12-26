import React from "react";


function App() {
  //
  const items = [1,2,3,4,5];
  items.map((item) => {
    console.log(item)
  })

  return (
    <div>
      <div className="box">
          <h1>Hello React</h1>
          <button>Submit</button>
      </div>
    </div>
  );
}


export default App;
