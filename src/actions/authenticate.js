import axios from 'axios'
import { authenticate } from 'reducers'

export const actionTypes = {
  AUTHENTICATE_REQUEST: 'AUTHENTICATE_REQUEST',
  AUTHENTICATE_SUCCESS: 'AUTHENTICATE_SUCCESS',
  AUTHENTICATE_FAILURE: 'AUTHENTICATE_FAILURE'
}

export const authAction = ({username, password}) => dispatch => {
  
  dispatch({type: actionTypes.AUTHENTICATE_REQUEST})

    return axios
      .post('http://localhost:9000/api/user/login', {
        username,
        password
      })
      .then(({data}) => {
        dispatch(authenticate({type: actionTypes.AUTHENTICATE_SUCCESS, data}))
        
      })
      .catch(({message}) => {
        dispatch(authenticate({type: actionTypes.AUTHENTICATE_FAILURE, message}))
      })

}