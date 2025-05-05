import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: null,
  token: localStorage.getItem('token'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.username
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
    },
    signup: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.username
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
})

export const { login, signup, logout } = authSlice.actions
export default authSlice.reducer