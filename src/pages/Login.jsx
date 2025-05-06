import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import Input from '../components/Input'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const storedUserStr = localStorage.getItem('registeredUser')
    console.log('Stored User String:', storedUserStr) 

    let storedUser = null
    if (storedUserStr) {
      try {
        storedUser = JSON.parse(storedUserStr)
      } catch (err) {
        console.error('Error parsing stored user:', err)
      }
    }
    console.log('Parsed Stored User:', storedUser) 

   
    const cleanedEmail = email.trim().toLowerCase()
    const storedEmail = storedUser?.email?.trim().toLowerCase() || ''


    if (storedUser && storedEmail === cleanedEmail && storedUser.password === password) {
      console.log('Login successful - Condition met')
      dispatch(login({ username: storedUser.username, email: storedUser.email, token: 'fake-token' }))
      navigate('/Authenticated-Blog-Dashboard/dashboard')
    } else {
      setError('Invalid email or password. Please check your credentials.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Sign in</button>
      </form>
    </div>
  )
}

export default Login