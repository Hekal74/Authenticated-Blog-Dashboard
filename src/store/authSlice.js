import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: localStorage.getItem('username') || null,
  email: localStorage.getItem('email') || null,
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
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('username', action.payload.username)
      localStorage.setItem('email', action.payload.email)
    },
    signup: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.username
      state.email = action.payload.email
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('username', action.payload.username)
      localStorage.setItem('email', action.payload.email)
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.email = null
      state.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('email')
      // حذفت السطر ده عشان ميمسحش بيانات الـ signup
      // localStorage.removeItem('registeredUser')
    },
  },
})

export const { login, signup, logout } = authSlice.actions
export default authSlice.reducer