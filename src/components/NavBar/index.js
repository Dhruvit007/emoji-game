import './index.css'

const NavBar = props => {
  const {score, isGameOn, highScore} = props
  const scoreClass = !isGameOn ? 'hide-score' : ''
  return (
    <div className="navbar-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className={`navbar-score-container ${scoreClass}`}>
        <p>Score: {score}</p>
        <p>Top Score: {highScore}</p>
      </div>
    </div>
  )
}

export default NavBar
