const initialState = {
    data: null,
    errorMessage:null,
    isLoading:false
}

const send_ConfirmPassword = (state=initialState,action)=>{
    if(action.type === 'CONFIRM_PASSWORD_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'CONFIRM_PASSWORD_SUCCESS'){
        return{
            ...state,
            data:action.payload,
            isLoading:false
        }
    } else if(action.type === 'CONFIRM_PASSWORD_FAILED') {
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
        
    } else {
        return state
    }
}


export default send_ConfirmPassword