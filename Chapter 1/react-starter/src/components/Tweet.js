import React from "react";


const Tweet = ({navn, message}) => {
    return(
        <div>
            <h2>{navn}</h2>
            <h3>{message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet;