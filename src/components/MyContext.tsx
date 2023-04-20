// MyContext.tsx
import { createContext, useContext, useState } from 'react'

interface MyContextType {
  qid: string
  setqid: (qid: string) => void
}

const MyContext = createContext<MyContextType | undefined>(undefined)

function MyContextProvider({ children }: { children: React.ReactNode }) {
  const [qid, setQid] = useState<string>(' ')

  function setqid(qid: string) {
    setQid(qid)
  }
  return (
    <MyContext.Provider value={{ qid, setqid }}>{children}</MyContext.Provider>
  )
}

function useMyContext() {
  const context = useContext(MyContext)
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider')
  }
  return context
}
export { MyContextProvider, useMyContext }
