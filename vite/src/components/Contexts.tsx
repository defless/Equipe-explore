import { createContext } from 'react';

import type { StoryContextValue } from './types'

export const StoryContext: React.Context<StoryContextValue> = createContext({} as StoryContextValue);