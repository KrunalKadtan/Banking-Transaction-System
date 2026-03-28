import axios from 'axios'

export const createTransaction = async (transactionData) => {
  const response = await axios.post('/api/transactions', transactionData)
  return response.data
}
