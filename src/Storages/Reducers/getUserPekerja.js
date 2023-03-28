const initialState = {
    data:null,
    errorMessage:null,
    isLoading:false
}

const userPekerja = (state=initialState,action)=>{
    if(action.type === 'GET_USER_PENDING'){
        return{
            ...state,
            errorMessage:null,
            isLoading:true
        }
    } else if(action.type === 'GET_USER_SUCCESS'){
        return{
            ...state,
            data:action.payload,
            isLoading:false
        }
    } else if(action.type === 'GET_USER_FAILED'){
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
    } else{
        return state
    }
}

export default userPekerja