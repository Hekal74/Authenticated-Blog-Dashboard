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

    // جيب بيانات اليوزر من localStorage
    const storedUserStr = localStorage.getItem('registeredUser')
    console.log('Stored User String:', storedUserStr) // للتأكد من النص المخزن

    let storedUser = null
    if (storedUserStr) {
      try {
        storedUser = JSON.parse(storedUserStr)
      } catch (err) {
        console.error('Error parsing stored user:', err)
      }
    }
    console.log('Parsed Stored User:', storedUser) // للتأكد من الـ parsing

    // نظّف الـ email من الفراغات وخلّيه lowercase
    const cleanedEmail = email.trim().toLowerCase()
    const storedEmail = storedUser?.email?.trim().toLowerCase() || ''

    // اطبع القيم للتأكد من المقارنة
    console.log('Entered Email (cleaned):', cleanedEmail)
    console.log('Stored Email (cleaned):', storedEmail)
    console.log('Entered Password:', password)
    console.log('Stored Password:', storedUser?.password || 'Not found')

    if (storedUser && storedEmail === cleanedEmail && storedUser.password === password) {
      console.log('Login successful - Condition met')
      // لو الإيميل والباسورد صح، نفّذ الـ login
      dispatch(login({ username: storedUser.username, email: storedUser.email, token: 'fake-token' }))
      navigate('/dashboard')
    } else {
      console.log('Login failed - Condition not met')
      // لو مش موجود أو البيانات غلط، اعرض رسالة خطأ
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