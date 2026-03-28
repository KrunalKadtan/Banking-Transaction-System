import { useNavigate } from 'react-router-dom'
import { createAccount } from '../services/account.service'

function CreateAccount() {
  const navigate = useNavigate()

  const handleCreate = async () => {
    try {
      await createAccount()
      navigate('/dashboard')
    } catch (err) {
      console.error('Failed to create account', err)
    }
  }

  return (
    <div>
      <h1>Create Account</h1>
      <p>Click below to create a new bank account.</p>
      <button onClick={handleCreate}>Create Account</button>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  )
}

export default CreateAccount
