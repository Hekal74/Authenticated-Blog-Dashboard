import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const Login: React.FC = () => {
  // Handle Google Login
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Fetch user info from Google
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const userData = await userInfo.json();
        // Save user name to localStorage
        localStorage.setItem('userName', userData.name || userData.email || 'User');
        // Redirect to main page after login
        window.location.href = '/';
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    onError: () => {
      console.error('Login Failed');
    },
    scope: 'email profile', // Request email and profile info
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4">Login with Google</h2>
        <button
          onClick={() => login()}
          className="px-4 py-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;