import React from "react";
import Tweet from "./Tweet";


const TweetList = ({navn, message}) => {
    return(
        <div>
            <Tweet navn={navn} message={message}/>
            <Tweet navn={navn} message={message}/>
            <Tweet navn={navn} message={message}/>
        </div>
    )
}

export default TweetList;