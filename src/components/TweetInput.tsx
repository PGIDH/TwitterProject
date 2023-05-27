import { useState } from "react";
import { TweetData } from "./models/Models";

function TweetInput({addTweet}:{addTweet:Function}) {   //addTweet passed as refernce from middlepanel
    const [tweetValue,setTweetValue] = useState<string>('');
    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTweetValue(event.target.value);
    }
    const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            addTweet(tweetValue);
            setTweetValue('');
        }
    }
    return(
        <div>
            {/* {tweetValue} */}
            <input type="text" onChange={handleInput} onKeyDown={handleKeyDown} value={tweetValue} placeholder="What's happening?"
                      className="tweetTextArea"/>
        </div>
    )
}

export default TweetInput;