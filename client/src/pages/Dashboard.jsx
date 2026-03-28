import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserAccounts } from '../services/account.service'
import { logoutUser } from '../services/auth.service'

function Dashboard() {
  const [accounts, setAccounts] = useState([])
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getUserAccounts()
        setAccounts(data.accounts)
      } catch (err) {
        setError('Failed to load accounts')
      }
    }
    fetchAccounts()
  }, [])

  const handleLogout = async () => {
    try {
      await logoutUser()
      navigate('/login')
    } catch (err) {
      console.error('Logout failed', err)
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => navigate('/create-account')}>Create New Account</button>
      <button onClick={() => navigate('/transfer')}>Transafer</button>
      {error && <p>{error}</p>}
      <h2>Your Accounts</h2>
      {accounts.length === 0 ? (
        <p>No accounts yet. Create one above.</p>
      ) : (
        accounts.map((account) => (
          <div key={account._id}>
            <p>Account ID: {account._id}</p>
            <button onClick={() => navigate(`/balance/${account._id}`)}>
              View Balance
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Dashboard
