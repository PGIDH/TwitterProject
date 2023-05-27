// import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import { TweetData } from "./models/Models"

function TweetList(props: { data: TweetData[][] }) {
   return (
      <div className="tweetList">
         {props?.data.map((tweet) => (
            tweet ? <Tweet data={tweet!} /> : <></>
         ))}
      </div>
   )
}
export default TweetList;