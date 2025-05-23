import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../store/postsSlice';
import Input from '../components/Input';
import { AppDispatch, RootState } from '../store';

function NewPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = { title, body, userId: 1 };
    await dispatch(addPost(newPost));
    navigate('/posts');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">New Post</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Add Post</button>
      </form>
    </div>
  );
}

export default NewPost;