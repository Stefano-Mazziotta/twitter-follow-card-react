import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard'

function App() {
  
  const users = [
    {
      username: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      username: 'steffmzt',
      name: 'Stefano Mazziotta',
      isFollowing: false
    },
    {
      username: 'hiimsteff',
      name: 'Hi im steff',
      isFollowing: true
    },
    {
      username: 'lionelmessi',
      name: 'Lionel Messi',
      isFollowing: false
    }
  ]

  return (
    <div className="App">
      <div className='wrap-cards'>
        {
          users.map( ({username, name, isFollowing}) => (
            <TwitterFollowCard
              key={username}
              username={username}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          ))
        }        
      </div>
    </div>
  )
}

export default App
