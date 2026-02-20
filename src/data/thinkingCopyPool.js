// 15 short loading copy variants — one picked randomly each time a card opens

const thinkingCopyPool = [
  'Thinking...',
  'On it...',
  'Brewing...',
  'Tuning in...',
  'Feeling out...',
  'One sec...',
  'Almost...',
  'Warming up...',
  'Composing...',
  'Working on it...',
  'Let me see...',
  'Here we go...',
  'Just a moment...',
  'Crafting...',
  'Getting there...',
]

export function getRandomThinkingCopy() {
  return thinkingCopyPool[Math.floor(Math.random() * thinkingCopyPool.length)]
}
