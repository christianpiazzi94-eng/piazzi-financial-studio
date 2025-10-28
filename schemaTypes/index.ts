// schemaTypes/index.ts
    
// 1. Import ALL schemas as default imports
import insight from './insight'
import author from './author'
import category from './category'
import blockContent from './blockContent'
import deepDive from './deepDive'
import screener from './screener'

// 2. Add all schemas to this exported list
export const schemaTypes = [
  insight, 
  author,
  category, 
  blockContent,
  deepDive,
  screener,
]