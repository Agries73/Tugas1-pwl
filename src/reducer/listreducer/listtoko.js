
import { GET_LIST_TOKO } from "../../action/toko";

const initialstate ={
    getlisttokohasil:false,
    getlisttokoloading:false,
    getlisttokoerror:false

}

const listtoko=(state=initialstate,action)=>{
    switch(action.type){
        case GET_LIST_TOKO:
            return{
                ...state,
                getlisttokohasil:action.payload.data,
                getlisttokoloading:action.payload.loading,
                getlisttokoerror:action.payload.errorMessage
            }
        default:
            return state;
    }
}
export default listtoko