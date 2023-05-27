import TweetList from "./TweetList";
import TweetInput from "./TweetInput";
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { PageResponse, TweetData, UserData } from "./models/Models";

function MiddlePanel(props: {data:PageResponse}) {

    const [tweets, setTweets] = useState<TweetData[][]>();
    const [loggedInUser, setLoggedInUser] = useState<UserData>();
    // const [tweetCount, setTweetCount] = useState(0);
    // const [ width, setWidth ] = useState();

    //fetching tweet threads 
    useEffect(() => {
        if (props.data.tweetThreads)
            setTweets(props?.data.tweetThreads)
        if (props?.data.loggedInUser) {
            setLoggedInUser(props?.data.loggedInUser);
        }
    }, [props?.data.tweetThreads, props?.data.loggedInUser]);

    // useCallBack for memoization
    const addNewTweet = useCallback((description:string) => {
        const newTweet:TweetData[] = [{
            user: {
                userName: loggedInUser!.userName,
                userId: loggedInUser!.userId,
                imageData: {
                    url: loggedInUser!.imageData.url,
                    alt: loggedInUser!.imageData.alt
                },
                blueTick: loggedInUser!.blueTick,
                joiningDate: loggedInUser!.joiningDate,
                following: loggedInUser!.following,
                followers: loggedInUser!.followers,
                desc: loggedInUser!.desc
            },
            tweetTime: new Date().getTime(),
            textArea: description,
            replies: 10400,
            reTweets: 1100,
            views: 107000,
            likes: 506000

        }];

        setTweets([newTweet, ...(tweets!)]); /// for react to understand that there is state change
    }, [tweets]);

    return (
        <div className='middle-panel'>
            <div className="home">
                <h2>
                    <span className="h2"> Home</span>
                </h2>
            </div>
            <div className="tabList">
                <div className="presentation">
                    <a href="/" className="forYouLink">
                        <div className="forYou">
                            <span className="forYouSpan">For you</span>
                            <div className="underline" />
                        </div>
                    </a>
                </div>
                <div className="presentation">
                    <a href="/" className="forYouLink">
                        <div className="forYou">
                            <span className="forYouSpan">Following</span>

                        </div>
                    </a>
                </div>
            </div>
            <div className="tweetSection">
                <div className="tweetSubSection" style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ paddingTop: '4px', marginRight: '12px', display: 'flex' }}>
                            <div className="avatar">
                                <div className="img">
                                    <img src='https://assets.nextleap.app/img/9708F944-928E-4DF0-BE77-9924B13CFA85-88d2f244-adc4-4428-9c79-7f9bd23363f8.JPG' style={{ width: '50px', height: '50px' }}></img>
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingTop: '4px' }}>
                            <div style={{ paddingTop: '12px', display: 'flex' }}>
                                <label>
                                    <div style={{ color: '#71767B' }}>
                                        {/* style can be added as prop */}
                                        <TweetInput addTweet={addNewTweet} />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tweetButtonDiv">
                    <button className="tweetButton">
                        Tweet
                    </button>
                </div>
            </div>
            {
                tweets ? <TweetList data={tweets!} /> : <></>
            }
            
        </div>
    )
}

export default MiddlePanel;