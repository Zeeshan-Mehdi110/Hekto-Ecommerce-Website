import axios from 'axios'
import { authActionsType } from '../store/actions/authActions'

export default function configureAxios(store) {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
  // request middleware
  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const state = store.getState()
        if (state.auth.token)
          config.headers.Authorization = 'Bearer ' + state.auth.token
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  // response middleware
  axios.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err.response && err.response.status === 401) {
        store.dispatch({
          type: authActionsType.AUTH_FAILED
        })
        localStorage.removeItem('token')
        return Promise.reject(new Error('Authentication failed'))
      } else {
        return Promise.reject(err)
      }
    }
  )
}
