import './index.css'

const NavBar = props => {
  const {score, isGameOn, highScore} = props
  const onNavbarDisplay = () => (
    <div className="navbar-score-container">
      <p className="score">Score: {score}</p>
      <p className="high-score">Top Score: {highScore}</p>
    </div>
  )
  return (
    <div className="navbar-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isGameOn ? onNavbarDisplay() : ''}
    </div>
  )
}

export default NavBar
