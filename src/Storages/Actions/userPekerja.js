import axios from "axios";

export const getUserPekerja = () => async (dispatch)=> {
    try{
        dispatch({type:'GET_USERS_PENDING'})
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/pekerja`)
        const get_User = result.data.data
        dispatch({type:'GET_USERS_SUCCESS',payload:get_User})
    } catch(err){
        dispatch({type:'GET_USERS_FAILED', payload:err.message})
        console.log("getUser error")
        console.log(err)
    }
}