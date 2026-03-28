import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAccountBalance } from '../services/account.service'

function Balance() {
  const [balance, setBalance] = useState(null)
  const [error, setError] = useState(null)
  const { accountId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await getAccountBalance(accountId)
        setBalance(data.balance)
      } catch (err) {
        setError('Failed to load balance')
      }
    }
    fetchBalance()
  }, [accountId])

  return (
    <div>
      <h1>Account Balance</h1>
      <p>Account ID: {accountId}</p>
      {error && <p>{error}</p>}
      {balance !== null ? (
        <h2>Balance: {balance}</h2>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  )
}

export default Balance
