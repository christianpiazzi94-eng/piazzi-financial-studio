// schemas/index.ts
import blockContent from './blockContent'
import category from './category'
// This line is updated:
import insight from './insight'
import author from './author'

// This array is updated:
export const schemaTypes = [insight, author, category, blockContent]