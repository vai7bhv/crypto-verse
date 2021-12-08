import React, { createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext()

function CryptoContex({ children }) {
  const [currency, setcurrency] = useState('USD')
  const [symbol, setsymbol] = useState('$')

  useEffect(() => {
    if (currency === 'USD') setsymbol('$')
    else setsymbol('INR')
  }, [currency])

  return (
    <Crypto.Provider value={{ currency, symbol, setcurrency }}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContex

export const CryptoState = () => {
  return useContext(Crypto)
}
