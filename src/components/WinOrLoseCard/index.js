import './index.css'

const WinOrLoseCard = props => {
  const {score, onReplyGame} = props
  const playAgain = () => {
    onReplyGame()
  }
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = score === 12 ? 'Won' : 'Lose'
  const paragraph = score === 12 ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <div className="result-text-container">
        <h1 className="result-heading">You {status}</h1>
        <p className="result-paragraph">{paragraph}</p>
        <p className="result-score">{score}/12</p>
        <button onClick={playAgain} className="play-again-btn" type="button">
          Play Again
        </button>
      </div>
      <img className="result-image" src={imgUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
