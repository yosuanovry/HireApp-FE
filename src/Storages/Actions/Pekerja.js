import axios from "axios";

export const getUser = (url) => async (dispatch)=> {
    try{
        dispatch({type:'GET_USER_PENDING'})
        const token = localStorage.getItem("token")
        let headers = {
            headers:{
              "Authorization": `Bearer ${token}`
          }}
        const result = await axios.get(`${url}`,headers)
        const user = result.data.data
        dispatch({type:'GET_USER_SUCCESS',payload:user})
    } catch(err){
        dispatch({type:'GET_USER_FAILED',payload:err.message})
        console.log("getUser error")
        console.log(err)
    }
}