import axios from "axios";

export const GET_LIST_TOKO = "GET_LIST_TOKO";
export const GetListToko = () => {
    return(dispatch)=>{

        dispatch({
            type:GET_LIST_TOKO,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
    })
    axios({
        method:'GET',
        url:'http://localhost:3000/ListToko',
        timeout:1000
    })
    .then((Response)=>{
        dispatch({
            type:GET_LIST_TOKO,
            payload:{
                loading:false,
                data:Response.data,
                errorMessage:false
            }
    })
})
    .catch((error)=>{
        dispatch({
            type:GET_LIST_TOKO,
            payload:{
                loading:false,
                data:false,
                errorMessage:error.message
            }
        })

    })
    }
}