import axios from "axios";

export const GET_LIST_BARANG = "GET_LIST_BARANG";
export const GetListBarang = () => {
    console.log('2.masuk act')
    return(dispatch)=>{

        dispatch({
            type:GET_LIST_BARANG,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
    })
    axios({
        method:'GET',
        url:'http://localhost:3000/ListBarang',
        timeout:1000
    })
    .then((Response)=>{
        console.log('3.berhasil:',Response)
        dispatch({
            type:GET_LIST_BARANG,
            payload:{
                loading:false,
                data:Response.data,
                errorMessage:false
            }
    })
})
    .catch((error)=>{
        dispatch({
            type:GET_LIST_BARANG,
            payload:{
                loading:false,
                data:false,
                errorMessage:error.message
            }
        })

    })
    }
}