/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    selectedCards: [],
    score: 0,
    isGameOn: true,
    highScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiSelect = id => {
    const {selectedCards, score} = this.state
    if (selectedCards.includes(id) === true) {
      this.setState({isGameOn: false})
    } else {
      this.setState(prevState => ({
        selectedCards: [...prevState.selectedCards, id],
        score: prevState.score + 1,
      }))
    }
  }

  displayCard = emojisList =>
    emojisList.map(eachCard => (
      <EmojiCard
        onEmojiSelect={this.onEmojiSelect}
        key={eachCard.id}
        eachCard={eachCard}
      />
    ))

  onGameOverDisplay = () => {
    const {score, isGameOn} = this.state
    return (
      <WinOrLoseCard
        onReplyGame={this.onReplyGame}
        score={score}
        isGameOn={isGameOn}
      />
    )
  }

  onReplyGame = () => {
    const {score, highScore} = this.state
    const newHighScore = score > highScore ? score : highScore
    this.setState({
      selectedCards: [],
      score: 0,
      isGameOn: true,
      highScore: newHighScore,
    })
  }

  render() {
    const {isGameOn, score, highScore} = this.state
    const emojisList = this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <NavBar score={score} highScore={highScore} isGameOn={isGameOn} />
        <ul className="emoji-card-container">
          {isGameOn ? this.displayCard(emojisList) : this.onGameOverDisplay()}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
