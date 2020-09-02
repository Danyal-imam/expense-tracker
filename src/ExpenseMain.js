import React, { useContext, useState } from 'react'
import {TransactionConext} from './transContext'

function ExpenseMain() {

    let {transactions,AddTransaction,DeleteTransaction} =useContext(TransactionConext)

    let [newDesc, setDesc] =useState("")
    let [newAmount, setAmount]=useState(0)

    const handleAddition=(event)=>{
        event.preventDefault()
        if(newAmount===0){
            alert('Enter a valid amount')
        }
        AddTransaction({
            desc:newDesc,
            amount:Number(newAmount),
            id:transactions.length
        })
        setDesc("")
        setAmount(0)
        
        
    }

    const getIncome=()=>{
        let income=0
        for(let i=0; i<transactions.length; i++){
            if(transactions[i].amount > 0)
            income += transactions[i].amount
        }
        return income
    }
    
    const getExpense =()=>{
        let expense = 0
        for (let i = 0; i <transactions.length; i++){
            if(transactions[i].amount < 0)
            expense += transactions[i].amount
        }
        return expense
    }


    function handleDelete(ind){
        DeleteTransaction({
            id:ind
        })
    }
    
    
    return (
        <div className="main-div">
           <h1 className="heading">Expense Tracker</h1>
           <br />
            <h3 className='balance'>Your Balance <br />{getIncome()+getExpense()}</h3>
           <div className="blnc">
            <h3>Income :<br />{getIncome()}</h3>
            <h3>Expense :<br />{getExpense()}</h3>
           </div>
           <h3 className='center'>History</h3>
           <hr />
           <ul >
               {
                   transactions.map((transObj,ind) =>{
                       return (
                           <li className="list" key={ind}>
                               <button className='dlt' onClick={()=>handleDelete(transObj.id)}> * </button>
                               <span>{transObj.desc}</span>
                               <span className='history-amount'>{transObj.amount}</span>
                           </li>
                       )
                   })
               }
           </ul>
           <h3 className='center'>Add Transaction</h3>
           <hr />
           <form onSubmit={handleAddition}>
               <label>Enter Description :</label><br />
               <input type="text" placeholder="Write a description" value={newDesc} onChange={(e)=>setDesc(e.target.value)}/><br />
               <label>Enter Value :</label><br />
               <input type="number"  value={newAmount} onChange={(e)=>setAmount(e.target.value)} />
               <input type="submit" value="Add a Value"  className='btn'/>
           </form>
        </div>
    )
}

export default ExpenseMain
