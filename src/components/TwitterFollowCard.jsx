import { useState } from 'react';
import './TwitterFollowCard.css';

export default function TwitterFollowCard({children, username = 'unknow', initialIsFollowing }){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Following' : 'Follow';    
    
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
            <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${username}`}
                alt="avatar" 
            />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{username}</span>
            </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-unfollow'>Unfollow</span>
                </button>
            </aside>
        </article>        
    );
}