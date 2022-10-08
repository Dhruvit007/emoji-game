import './index.css'

const EmojiCard = props => {
  const {eachCard, onEmojiSelect} = props
  const {id, emojiUrl, emojiName} = eachCard
  const onCardSelect = () => {
    onEmojiSelect(id)
  }
  return (
    <li className="emoji-card">
      <button className="emoji-btn" type="button" onClick={onCardSelect}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
