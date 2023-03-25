const initialState = {
    data: null,
    errorMessage:null,
    isLoading:false
}

const send_Otp = (state=initialState,action)=>{
    if(action.type === 'SEND_OTP_PENDING'){
        return{
            ...state,
            isLoading:true
        }
    } else if(action.type === 'SEND_OTP_SUCCESS'){
        return{
            ...state,
            data:action.payload,
            isLoading:false
        }
    } else if(action.type === 'SEND_OTP_FAILED') {
        return{
            ...state,
            errorMessage:action.payload,
            isLoading:false
        }
        
    } else {
        return state
    }
}


export default send_Otp