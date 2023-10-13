import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
const getwebsettings=async()=>{
    var res=await axios.get(`${apiurl()}/settings/getwebsettings`);
    return res.data;
}
const getbannersettings=async()=>{
    var res=await axios.get(`${apiurl()}/settings/getbannersettings`);
    return res.data;
}
export {getwebsettings,getbannersettings};