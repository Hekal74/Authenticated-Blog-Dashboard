import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../store/authSlice';
import Input from '../components/Input';
import { AppDispatch } from '../store';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (password.length <= 6) {
      setError('Password must be longer than 6 characters.');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // تحقق لو الـ email موجود في JSONPlaceholder
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
    if (response.data.length > 0) {
      setError('This email is already registered.');
      return;
    }

    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, position, location }),
    });

    const userData = { username, email, password, position, location };
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    dispatch(signup({ username, email, position, location, token: 'fake-token' }));
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Signup</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input label="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
        <Input label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Signup</button>
      </form>
    </div>
  );
}

export default Signup;