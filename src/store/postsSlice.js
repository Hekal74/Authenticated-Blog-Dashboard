import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20&_sort=id&_order=desc')
  return response.json()
})

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  const newPost = {
    ...post,
    id: Date.now(),
    userId: 1,
    date: new Date().toISOString().split('T')[0]
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  })
  return response.json()
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: { 
    posts: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload)
      })
  },
})

export default postsSlice.reducer