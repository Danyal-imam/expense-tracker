import React, { createContext, useReducer } from 'react'
import TransReducer from "./TransReducer";

const initialTransaction= []

export const TransactionConext = createContext(initialTransaction)

export const ContextProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransReducer,initialTransaction)

    function AddTransaction(transObj){
        dispatch({
            type:"Add-transaction",
            payload:{
                desc:transObj.desc,
                amount:transObj.amount,
                id:transObj.id

            }
        })
    }

    function DeleteTransaction(transObj){
        dispatch({
            type:'Delete-transaction',
            payload:{
                id:transObj.id
            }
        })
    }
    

    return(
        <TransactionConext.Provider value={
            {
                transactions:state,
                AddTransaction,
                DeleteTransaction
            }
        }>
            {children}
        </TransactionConext.Provider>
    )
}
