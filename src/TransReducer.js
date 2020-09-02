const TransReducer = ((state ,action)=>{
    switch(action.type){
        
        case "Add-transaction" :{
            return [action.payload,...state]
        }
        case "Delete-transaction":{
            return state.filter(trans=>trans.id !== action.payload.id)
        }
        default:
            return state
    }
})

export default TransReducer