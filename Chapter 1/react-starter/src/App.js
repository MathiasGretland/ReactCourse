import React, { useState } from "react";
//Import components
import Tweet from "./components/Tweet";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  /*
  //Her kan du skrive vanlig js
  const [navn, setNavn] = useState('Kjetil')
  const message = "I went to sleep today wow"
  //Create our functions
  const sayHelloHandler = (user) => {
    setNavn('Pop smoke')
    console.log(`Hello there ${user}`)
  }

  const textStyle = { color: 'red', fontSize: 40 }
  */
  const [navn, setNavn] = useState("Kjetil")
  const message = "HEI"

  //State
  const [textInput, setTextInput] = useState("")
  const [tweets, setTweets] = useState([])
  return (
    <div>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
      <TweetList navn={navn} tweets={tweets} setTweets={setTweets} />
      {/*
      <h1 style={textStyle}>Hello {navn}</h1>
      <button onClick={() => sayHelloHandler("Magnus")}>Click</button>
      */}
    </div>
  );
}


export default App;

//7