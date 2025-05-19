import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './index';

interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
  createdAt?: string;
}

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data.map((post: any) => ({
    ...post,
    createdAt: new Date().toISOString(),
  }));
});

export const addPost = createAsyncThunk('posts/addPost', async (post: Omit<Post, 'id' | 'createdAt'>, { getState }) => {
  const state = getState() as RootState;
  const userId = state.auth.user ? 1 : 0; 
  const newPost = {
    ...post,
    userId,
    createdAt: new Date().toISOString(),
  };
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
  return { ...response.data, createdAt: newPost.createdAt, id: response.data.id || Date.now() };
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      });
  },
});

export default postsSlice.reducer;