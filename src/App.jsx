import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

function App() {
  
  return (
    <div className="App">
      <div className='wrap-cards'>
        <TwitterFollowCard username="steffmzt" name="Stefano Mazziotta" isFollowing={true} />
        <TwitterFollowCard username="reddit" name="reddit official" isFollowing={false} />
        <TwitterFollowCard username="leomessi" name="Lionel Messi" isFollowing={false} />
      </div>
    </div>
  )
}

export default App
