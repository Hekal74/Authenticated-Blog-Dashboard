import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  email: string | null;
  position: string | null;
  location: string | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: localStorage.getItem('username') || null,
  email: localStorage.getItem('email') || null,
  position: localStorage.getItem('position') || null,
  location: localStorage.getItem('location') || null,
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: { payload: { username: string; email: string; position?: string; location?: string; token: string } }) => {
      state.isAuthenticated = true;
      state.user = action.payload.username;
      state.email = action.payload.email;
      state.position = action.payload.position || localStorage.getItem('position') || null;
      state.location = action.payload.location || localStorage.getItem('location') || null;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('email', action.payload.email);
      if (action.payload.position) localStorage.setItem('position', action.payload.position);
      if (action.payload.location) localStorage.setItem('location', action.payload.location);
    },
    signup: (state, action: { payload: { username: string; email: string; position: string; location: string; token: string } }) => {
      state.isAuthenticated = true;
      state.user = action.payload.username;
      state.email = action.payload.email;
      state.position = action.payload.position;
      state.location = action.payload.location;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('position', action.payload.position);
      localStorage.setItem('location', action.payload.location);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.email = null;
      state.position = null;
      state.location = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('position');
      localStorage.removeItem('location');
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;