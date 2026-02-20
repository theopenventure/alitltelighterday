// 15 short loading copy variants — one picked randomly each time a card opens

const thinkingCopyPool = [
  'thinking...',
  'on it...',
  'brewing...',
  'tuning in...',
  'feeling out...',
  'one sec...',
  'almost...',
  'warming up...',
  'composing...',
  'working on it...',
  'let me see...',
  'here we go...',
  'just a moment...',
  'crafting...',
  'getting there...',
]

export function getRandomThinkingCopy() {
  return thinkingCopyPool[Math.floor(Math.random() * thinkingCopyPool.length)]
}
