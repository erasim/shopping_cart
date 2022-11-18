 
 const reducer =(state=0,action)=>{
if(action.type==='deposit'){
   
    return state + Number(action.payload)
}else if(action.type==='withdraw'){

    return state - Number(action.payload)
}else{return state;}
}
export default reducer;