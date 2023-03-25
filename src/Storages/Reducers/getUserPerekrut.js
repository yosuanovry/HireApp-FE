const initialState = {
    data:null,
    errorMessage:null,
    isLoading:false
}

const get_UserPerekrut = (state=initialState,action)=>{
    if(action.type === 'GET_USER_PENDING'){
        return{
            ...state,
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

export default get_UserPerekrut