
const cartitems =(state=[],action)=>{
    if(action.type==='Add_to_Cart'){
       
        return [...state, { ...action.payload }]
    }else if(action.type==='Remove_to_Cart'){
        {state.splice(action.payload,1)}
        return [...state,]
    }else{return state;}
    }
    export default cartitems;