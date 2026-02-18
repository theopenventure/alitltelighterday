// Daily rotating boost cards — computed once per page load.
// Deterministic: same calendar day = same prompts for everyone.
import { getDailyBoosts } from './boostPromptPool'

export const boostCards = getDailyBoosts()
