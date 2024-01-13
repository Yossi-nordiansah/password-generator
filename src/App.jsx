import { useState } from 'react'
import PasswordGenerator from './page/passwordGenerator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordGenerator/>
    </>
  )
}

export default App
