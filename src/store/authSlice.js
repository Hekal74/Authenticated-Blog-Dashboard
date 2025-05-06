import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: localStorage.getItem('username') || null,
  email: localStorage.getItem('email') || null,
  role: localStorage.getItem('role') || null,
  location: localStorage.getItem('location') || null,
  token: localStorage.getItem('token'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.username
      state.email = action.payload.email
      state.role = action.payload.role
      state.location = action.payload.location
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('username', action.payload.username)
      localStorage.setItem('email', action.payload.email)
      localStorage.setItem('role', action.payload.role)
      localStorage.setItem('location', action.payload.location)
    },
    signup: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.username
      state.email = action.payload.email
      state.role = action.payload.role
      state.location = action.payload.location
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('username', action.payload.username)
      localStorage.setItem('email', action.payload.email)
      localStorage.setItem('role', action.payload.role)
      localStorage.setItem('location', action.payload.location)
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.email = null
      state.token = null
      state.role = null
      state.location = null

      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('role')
      localStorage.removeItem('location')
      localStorage.removeItem('email')
    },
  },
})

export const { login, signup, logout } = authSlice.actions
export default authSlice.reducer