import { configureStore } from '@reduxjs/toolkit'
import rootReducer from 'reducers'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: rootReducer.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(thunk)
})

export default store