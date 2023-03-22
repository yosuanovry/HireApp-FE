const initialState = {
    data: [],
    errorMessage:null,
    isLoading:false
}

const registerUser = (state=initialState,action)=>{
    if(action.type === 'USER_REGISTER_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'USER_REGISTER_SUCCESS'){
        return{
            ...state,
            data :[...state.data, action.payload],
            isLoading:false
        }
    } else if(action.type === 'USER_REGISTER_FAILED'){
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
        
    } else {
        return state
    }
}


export default registerUser