import axios from 'axios'
import { fetchItems } from 'reducers'

export const actionTypes = {
  FETCH_REQUEST: 'FETCH_REQUEST',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE'
}

export const fetchItemsAction = (itemType) => (dispatch, getState) => {

  dispatch({type: actionTypes.FETCH_REQUEST})

  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().userID
      }
    })
    .then(({data}) => {
      dispatch(fetchItems({
        type: actionTypes.FETCH_SUCCESS,
        ...data,
        itemType,
        data
      }))
    })
    .catch(({message}) => {
      console.log(err)
      dispatch(fetchItems({
        type: actionTypes.FETCH_FAILURE,
        message
      }))
    })

}