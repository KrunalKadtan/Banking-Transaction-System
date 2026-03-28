import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import Balance from './pages/Balance.jsx'
import Transfer from './pages/Transfer.jsx'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='/balance/:accountId' element={<Balance />} />
      <Route path='/transfer' element={<Transfer />} />
    </Routes>
  )
}

export default App
