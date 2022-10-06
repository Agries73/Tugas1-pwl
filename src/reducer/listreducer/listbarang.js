import { GET_LIST_BARANG } from "../../action/barang";

const initialstate ={
    getlistbaranghasil:false,
    getlistbarangloading:false,
    getlistbarangerror:false

}

const listbarang=(state=initialstate,action)=>{
    switch(action.type){
        case GET_LIST_BARANG:
            return{
                ...state,
                getlistbaranghasil:action.payload.data,
                getlistbarangloading:action.payload.loading,
                getlistbarangerror:action.payload.errorMessage
            }
        default:
            return state;
    }
}
export default listbarang