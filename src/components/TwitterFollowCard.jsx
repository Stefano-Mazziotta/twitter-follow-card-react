import { useState } from 'react';
import './TwitterFollowCard.css';

export default function TwitterFollowCard({username = 'unknow', name}){
    
    let [isFollowing, setIsFollowing] = useState(false);

    const defaultText = isFollowing ? 'Following' : 'Follow';
    const [text, setText] = useState(defaultText);
    
    const buttonClassNameDefault = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const [buttonClassName, setButtonClassName] = useState(buttonClassNameDefault);

    // next step -> improve logic handle events with functions.

    const handleClick = () => {
        const newFollowing = !isFollowing;
        setIsFollowing(newFollowing);

        //create function -> getNewClass();
        const newClass = 'tw-followCard-button'
        setButtonClassName(newClass);   

        //create function -> getNewText();
        const newText = newFollowing ? 'Following' : 'Follow';
        setText(newText);
    }

    const handleMouseEnter = () => {
        
        //create function -> getNewClass();
        const newClass = isFollowing ? 'tw-followCard-button is-following red' : 'tw-followCard-button'
        setButtonClassName(newClass);

        //create function -> getNewText();
        const newText = isFollowing ? 'Unfollow' : 'Follow';
        setText(newText);
    }

    const handleMouseOut = () => {
        //create function -> getNewClass();
        const newClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
        setButtonClassName(newClass)

        //create function -> getNewText();
        const newText = isFollowing ? 'Following' : 'Follow';
        setText(newText);
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
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{username}</span>
            </div>
            </header>
            <aside>
                <button className={buttonClassName} onMouseOut={handleMouseOut} onMouseEnter={handleMouseEnter} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>        
    );
}