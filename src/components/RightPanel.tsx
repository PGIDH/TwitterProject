import React, { useState, useEffect } from "react";
import { ReactComponent as BlueTick } from "./svg/tickIcon.svg";
import { ReactComponent as SearchIcon } from "./svg/searchIcon.svg";
import { PageResponse, TrendingListData, FollowData } from "./models/Models";

function RightPanel(props: {data:PageResponse}) {
  //interfaces for props
  const [trendData, setTrendData] = useState<TrendingListData>();
  const [followData, setFollowData] = useState<FollowData>();

  //fetching trending data
  useEffect(() => {
    if (props.data.trendingData)
      setTrendData(props?.data.trendingData)
    if (props.data.followData)
      setFollowData(props?.data.followData)
  }, [props?.data.trendingData, props?.data.followData]);

  return (
    <div className='right-panel'>
      <div style={{ paddingTop: '12px', paddingBottom: '64px' }}>
        <div className="search-div">
              <SearchIcon className="tweetNums" style={{paddingLeft:'12px'}}/>
              <span>
                <input placeholder="Search Twitter" role="combobox" className="search-input"></input>
              </span>
        </div>
        <div className="timeline">
          <div>
            <h2>{trendData?.title}</h2>
          </div>
          <div className="trendingList">
            {trendData?.trends.map(trendList =>
              <div className="trendingListSection">
                <div className="trendingListSmall">{trendList.country ? trendList.country : trendList.category}</div>
                <div>{trendList.text}</div>
                <div className="trendingListSmall">
                  {trendList.tweets ?
                    `${Intl.NumberFormat("en", { notation: "compact" }).format(trendList.tweets)} Tweets` :
                    <div>Trending with
                      <span style={{ color: "#489BE9" }}> {trendList.hashTags?.map((tags => tags + ' '))} </span>
                    </div>
                  }
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="showMore"> Show More</div>
          </div>
        </div>
        <div className="usersToFollow">
          <h2>{followData?.title}</h2>
          {followData?.usersToFollow.map(usersToFollow =>
            <div className="trendData">
              <img className="trendDataSection" src={usersToFollow.imageData.url} alt={usersToFollow.imageData.alt} width='50px' height="50px"></img>
              <div className="trendUserData">
                <div>
                  <div  className="user-info"> {usersToFollow.userName}
                    <span style={{ marginTop: "3px" }}>
                      <BlueTick ></BlueTick>
                    </span>
                  </div>
                  <div className="trendUserDataSmall"> {usersToFollow.userId} </div>
                </div>
                <div>
                  <button className="followButton">Follow</button>
                </div>
              </div>
            </div>
          )}
          <div>
            <div className="showMore"> Show More</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RightPanel;