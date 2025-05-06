import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../store/authSlice'
import Input from '../components/Input'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [location, setLocation] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, role, location}),
    })

    const userData = { username, email, password, role, location}
    localStorage.setItem('registeredUser', JSON.stringify(userData))

    dispatch(signup({ username: username, email: email, role: role, location: location, token: 'fake-token' }))
    navigate('/Authenticated-Blog-Dashboard/login')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input label="Role" type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        <Input label="Location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Signup</button>
      </form>
    </div>
  )
}

export default Signup
