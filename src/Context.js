import React, { createContext, useState } from "react";
const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAUth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAUth(true)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
export default {
  Provider,
  Consumer: Context.Consumer
}

