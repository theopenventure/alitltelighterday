// Shared segment renderers — used by ContentOverlay and ArchiveDetail

export function flattenSegments(segments) {
  if (!segments) return []
  const flat = []
  let factCount = 0
  for (const seg of segments) {
    if (seg.type === 'breath') {
      (seg.steps || []).forEach((step, i) => {
        flat.push({ type: 'breath-step', ...step, index: i })
      })
    } else if (seg.type === 'fact') {
      factCount++
      // Only render the first fact as a quote; extras become plain text
      if (factCount > 1) {
        flat.push({ type: 'text', content: seg.content })
      } else {
        flat.push(seg)
      }
    } else {
      flat.push(seg)
    }
  }
  return flat
}

// Find the index of the first text segment in a flat segment list
export function findFirstTextIndex(flatSegments) {
  return flatSegments.findIndex((s) => s.type === 'text')
}

// Parse a string containing <strong>...</strong> markers into an array of
// React nodes. Anything outside of <strong> tags (including any other HTML
// that might sneak in from an LLM response) is rendered as plain text, so
// React's default string escaping keeps us safe from XSS — no innerHTML.
const STRONG_REGEX = /<strong>([\s\S]*?)<\/strong>/g

export function renderInlineStrong(text) {
  if (!text) return null
  const parts = []
  let lastIndex = 0
  let match
  let key = 0
  STRONG_REGEX.lastIndex = 0
  while ((match = STRONG_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(<strong key={`s-${key++}`}>{match[1]}</strong>)
    lastIndex = STRONG_REGEX.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts
}

function SegmentText({ content, isFirst }) {
  return (
    <p className={`seg-text ${isFirst ? 'seg-text--first' : ''}`}>
      {renderInlineStrong(content)}
    </p>
  )
}

function SegmentSong({ title, artist, why }) {
  return (
    <div className="seg-song">
      <div className="seg-song-header">
        <div>
          <div className="seg-song-title">{title}</div>
          <div className="seg-song-artist">{artist}</div>
        </div>
      </div>
      <div className="seg-song-why">{why}</div>
    </div>
  )
}

function SegmentMeal({ name, vibe, desc }) {
  return (
    <div className="seg-meal">
      <div className="seg-meal-name">{name}</div>
      <div className="seg-meal-vibe">{vibe}</div>
      <div className="seg-meal-desc">{desc}</div>
    </div>
  )
}

function SegmentBreathStep({ label, detail, index }) {
  return (
    <div className="seg-step">
      <div className="seg-step-num">{index + 1}</div>
      <div className="seg-step-body">
        <div className="seg-step-label">{label}</div>
        <div className="seg-step-detail">{detail}</div>
      </div>
    </div>
  )
}

function SegmentFact({ content }) {
  return <p className="seg-fact">{content}</p>
}

function SegmentList({ items }) {
  return (
    <ul className="seg-list">
      {(items || []).map((item, i) => (
        <li key={i} className="seg-list-item">{item}</li>
      ))}
    </ul>
  )
}

export function renderSegment(seg, i, firstTextIndex) {
  switch (seg.type) {
    case 'text':
      return <SegmentText key={i} content={seg.content} isFirst={i === firstTextIndex} />
    case 'song':
      return <SegmentSong key={i} title={seg.title} artist={seg.artist} why={seg.why} />
    case 'meal':
      return <SegmentMeal key={i} name={seg.name} vibe={seg.vibe} desc={seg.desc} />
    case 'breath-step':
      return <SegmentBreathStep key={i} label={seg.label} detail={seg.detail} index={seg.index} />
    case 'fact':
      return <SegmentFact key={i} content={seg.content} />
    case 'list':
      return <SegmentList key={i} items={seg.items} />
    default:
      return null
  }
}
