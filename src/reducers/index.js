import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { actionTypes } from 'actions/authenticate.js'
import { actionTypes as fetchActionTypes } from 'actions/fetchItems.js'

// export const actionCreators = {
//   authenticate: payload => ({type: actionTypes.AUTH_REQUEST})
// }

const rootReducer = createSlice({
  name: 'root',
  initialState: {
    twitters: [],
    articles: [],
    notes: [],
    userID: '62a8bec2f585d2a455958ee9'
  },
  reducers: {
    deleteItem: (state, { payload }) => {
      state[payload.pageContext] = state[payload.pageContext].filter(({ id }) => id !== payload.id)
    },
    addItem: (state, { payload }) => {
      const getId = () => `_${Math.random().toString(36).substr(2, 9)}`

      const data = { ...payload.content, id: getId() }

      state[payload.pageContext].push(data)
    },
    authenticate: (state, {payload}) => {

      const { type, data, message } = payload

      switch (type){
        case actionTypes.AUTHENTICATE_SUCCESS:
          return {
            ...state,
            userID: data._id
          }
        case actionTypes.AUTHENTICATE_FAILURE:
          console.log(message)
          break
        default:
          console.log('Brak odpowiedniej akcji')
      }
    },
    fetchItems: (state, {payload}) => {
      const { type, data, message } = payload
      switch(type){
        case fetchActionTypes.FETCH_SUCCESS:
          return {
            ...state,
            [payload.itemType]: [...data]
          }
        case fetchActionTypes.FETCH_FAILURE:
          console.log(message)
      }
    }
  }
})

export const { deleteItem, addItem, authenticate, fetchItems } = rootReducer.actions

export default rootReducer
