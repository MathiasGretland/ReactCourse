import React from "react";
import Tweet from "./Tweet";


const TweetList = ({ navn, tweets, setTweets }) => {
    return (
        <div>
            {tweets.map(tweet => <Tweet setTweets={setTweets} navn={navn} tweet={tweet} tweets={tweets} />)}
        </div>
    )
}

export default TweetList;