import { ReactComponent as BlueTick } from "./svg/tickIcon.svg";
import { ReactComponent as Replies } from "./svg/replies.svg";
import { ReactComponent as ReTweets } from "./svg/reTweets.svg";
import { ReactComponent as Likes } from "./svg/likes.svg";
import { ReactComponent as Views } from "./svg/views.svg";
import { TweetData } from "./models/Models";
import { MouseEventHandler, useState } from "react";


function Tweet(props: { data: TweetData[] }) {

    const handleIncrementLikes = (numOfLikes: number) => {
         numOfLikes++;
    }

    return (
        <div style={{ borderBottom: '1px rgb(47, 51, 54) solid' }}>
            <div className="tweet-section">
                {props?.data.map((tweetData, idx) =>
                    <>
                        <div className="tweetThread">
                            <div className="img">
                                <img src={tweetData.user.imageData.url} style={{ width: '30px', height: '30px' }}
                                    alt={tweetData.user.imageData.alt}></img>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className="tweet-body">
                                    <div className="user-info">
                                        <a href="" style={{ fontSize: '15px', fontWeight: '700', color: 'white', textDecoration: 'none' }}>{tweetData.user.userName}</a>
                                        <BlueTick style={{ marginTop: '2px' }} />
                                        <span style={{ color: 'rgb(113, 118, 123)', fontSize: '15px', fontWeight: '400' }}>{`@${tweetData.user.userId}`}</span>
                                        <span style={{ fontWeight: '700', color: 'rgb(113, 118, 123)' }}>·</span>
                                        <span style={{ color: 'rgb(113, 118, 123)' }}>{new Date(tweetData.tweetTime).toLocaleString('default', { month: 'short' })} {new Date(tweetData.tweetTime).getDate()}</span>
                                    </div>
                                    <div style={{ color: '##687684', fontSize: '14px', fontWeight: '400', marginLeft: '3px' }}>
                                        {((idx) > 0) ? <div style={{ color: 'rgb(113, 118, 123)' }}>Replying to <span style={{ color: '#4C9EEB' }}>@{tweetData.user.userId} </span></div> : ''}
                                    </div>
                                    <div className="tweet-description" style={{ marginLeft: '3px', fontSize: '15px', fontWeight: '400' }}>
                                        {tweetData.textArea}
                                    </div>
                                    <div className="tweetNums">
                                        <Replies />
                                        {Intl.NumberFormat("en", { notation: "compact" }).format(tweetData.replies)}
                                        <ReTweets />
                                        {Intl.NumberFormat("en", { notation: "compact" }).format(tweetData.reTweets)}
                                        <Likes onClick={()=> handleIncrementLikes(tweetData.likes!)} />
                                        {Intl.NumberFormat("en", { notation: "compact" }).format(tweetData.likes)}
                                        <Views />
                                        {Intl.NumberFormat("en", { notation: "compact" }).format(tweetData.views)}
                                    </div>
                                </div>
                            </div>
                        </div >
                    </>
                )}
            </div>
        </div >
    )
}

export default Tweet;