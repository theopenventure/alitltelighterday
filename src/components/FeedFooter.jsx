import './FeedFooter.css'

export default function FeedFooter({ allExplored }) {
  return (
    <div className={`feed-footer ${allExplored ? 'feed-footer--complete' : ''}`}>
      {allExplored ? (
        <>
          <div className="complete-message">Today's boosts, explored</div>
          <div className="complete-sub">
            New ones are on the way tomorrow morning.
            Take the rest of the day gently.
          </div>
        </>
      ) : (
        "That's all for today. See you tomorrow."
      )}
    </div>
  )
}
