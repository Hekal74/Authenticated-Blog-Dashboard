import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
})

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
  })
  return response.json()
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload
    })
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload)
    })
  },
})

export default postsSlice.reducer