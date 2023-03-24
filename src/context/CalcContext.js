import { createContext, useState } from "react"

export const Calccontext = createContext()

const CalcaProvider = ({children}) => {
    const [calc,setCalc]= useState({
        sign:"",
        num:0,
        res:0
    })

    const providerValue ={
        calc,setCalc
    }
  return (
    <Calccontext.Provider value={providerValue}>
        {children}
    </Calccontext.Provider>
  )
}

export default CalcaProvider