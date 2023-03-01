import { configureStore } from '@reduxjs/toolkit'

import gameReducer from '../features/gameSlice'
console.log(gameReducer)
export const store = configureStore({
  reducer: gameReducer,
})
console.log(store)