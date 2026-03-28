import axios from "axios";

export const createAccount = async (accountData) => {
  const response = await axios.post('/api/accounts', accountData)
  return response.data
}

export const getUserAccounts = async () => {
  const response = await axios.get('/api/accounts')
  return response.data
}

export const getAccountBalance = async (accountId) => {
  const response = await axios.get(`/api/accounts/balance/${accountId}`)
  return response.data
}
