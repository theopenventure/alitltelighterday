import { useMemo } from 'react'
import { dateSeed } from '../data/boostPromptPool'
import footerCopyPool from '../data/footerCopyPool'
import './FeedFooter.css'

export default function FeedFooter() {
  // Pick one footer line per day, consistent across sessions
  const copy = useMemo(() => {
    const today = new Date().toDateString()
    const index = dateSeed(today + '-footer') % footerCopyPool.length
    return footerCopyPool[index]
  }, [])

  return (
    <div className="feed-footer">
      {copy}
    </div>
  )
}
