import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTransaction } from '../services/transaction.service'

function Transfer() {
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    idempotencyKey: crypto.randomUUID()
  })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createTransaction({
        ...formData,
        amount: Number(formData.amount)
      })
      setSuccess('Transaction completed successfully')
      setTimeout(() => navigate('/dashboard'), 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Transaction failed')
    }
  }

  return (
    <div>
      <h1>Transfer Money</h1>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fromAccount"
          placeholder="From Account ID"
          value={formData.fromAccount}
          onChange={handleChange}
        />
        <input
          type="text"
          name="toAccount"
          placeholder="To Account ID"
          value={formData.toAccount}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Transfer</button>
      </form>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  )
}

export default Transfer
