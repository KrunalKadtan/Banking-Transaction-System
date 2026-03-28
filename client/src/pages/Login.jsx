import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/auth.service'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginUser(formData)
      navigate('/dashboard')
    } catch (error) {
      setError(err.response?.data?.message || 'Login Failed')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={formData.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
      <p>Don't have an account? <a href='/register'>Register</a></p>
    </div>
  )
}

export default Login
