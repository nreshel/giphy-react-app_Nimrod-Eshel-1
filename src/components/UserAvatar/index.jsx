import React from 'react'
import { SiInstagram } from 'react-icons/si';
import { SiGiphy } from 'react-icons/si';
import './UserAvatar.scss'
export const UserAvatar = ({ user, classes, showSocials }) => {
    const parseClasses = () => {
        if(Array.isArray(classes) && classes.length > 0) {
            return classes.join(' ')
        }
        return '';
    }
    const displaySocialIcons = () => {
        if(showSocials !== undefined) {
            return (
                <div className="icons_container">
                    {showSocials?.instagram === true && user.profile_url.length > 0 ? <a className="giphy_icon" href={user.profile_url}><SiGiphy size={25} /></a> : null}
                    {showSocials?.giphy === true && user.instagram_url.length > 0 ? <a className="instagram_icon" href={user.instagram_url}><SiInstagram size={30} /></a> : null}
                </div>
            )
        }
    }
    return (
        <div className={parseClasses()}>
            <img src={user?.avatar_url} alt="" />
            <div>
                <p>{user?.display_name}</p>
                <p>@{user?.username}</p>
            </div>
            {displaySocialIcons()}
        </div>
    )
}