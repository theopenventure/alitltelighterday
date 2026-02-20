import './FeedFooter.css'

export default function FeedFooter({ allExplored }) {
  return (
    <div className={`feed-footer ${allExplored ? 'feed-footer--complete' : ''}`}>
      {allExplored ? (
        <>
          <div className="complete-message">today's boosts, explored</div>
          <div className="complete-sub">
            new ones are on the way tomorrow morning.
            take the rest of the day gently.
          </div>
        </>
      ) : (
        "that's all for today. see you tomorrow."
      )}
    </div>
  )
}
