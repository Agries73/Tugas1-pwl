import {combineReducers} from "redux";
import  listbarang from "./listreducer/listbarang";
import listtoko from "./listreducer/listtoko";


export default combineReducers({
    listbarang,
    listtoko
})