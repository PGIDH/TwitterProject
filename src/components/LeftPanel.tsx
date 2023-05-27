import { useEffect, useState } from "react";
import {  ButtonData, PageResponse, UserData } from "./models/Models";

function LeftPanel(props: {data:PageResponse}) {

    const [sideNav, setSideNav] = useState<ButtonData[]>();
    const [loggedInUser, setLoggedInUser] = useState<UserData>();
    useEffect(() => {
        if (props?.data.sideNavigationButtons)
            setSideNav(props?.data.sideNavigationButtons)
        if (props?.data.loggedInUser) {
            setLoggedInUser(props?.data.loggedInUser);
        }
    }, [props?.data.sideNavigationButtons, props?.data.loggedInUser]);

    return (
        /* unwanted divs can be removed */
        <div className='left-panel'>
            <div className="leftPanelIcons" >
                {sideNav?.map(iconInfo =>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                        <img src={iconInfo.icon?.url} alt={iconInfo.icon?.alt} ></img>
                        <div className="iconInfo">
                            {iconInfo.buttonText}
                        </div>
                    </div>
                )}
            </div>
            <div className="userInfo">
                <img src={loggedInUser?.imageData.url} ></img>
                <div>
                    <div style={{fontWeight: '700', fontSize: '15px', lineHeight: '18px', color: '#D9D9D9'}}>{loggedInUser?.userName}</div>
                    <div style={{color: 'rgb(113, 118, 123)', fontSize: '15px', fontWeight: '400'}}>@{loggedInUser?.userId}</div>
                </div>
            </div>
        </div>)
}

export default LeftPanel;