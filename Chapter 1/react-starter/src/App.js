import React from "react";
//Import components
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";


function App() {
  //Her kan du skrive vanlig js
  const navn = "Kjetil"
  const message = "I went to sleep today wow"
  //Create our functions
  const sayHelloHandler = (user) => {
    console.log(`Hello there ${user}`)
  }

  return (
    <div>
      {/*<h1>Hello React</h1>
      <CreateTweet />
      <TweetList navn={navn} message={message}/>*/}
      <h1>Hello React</h1>
      <button onClick={() => sayHelloHandler("Magnus")}>Click</button>
    </div>
  );
}


export default App;

//4