import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";
import { gettoken } from "../Token/token";
const getwebsettings=async()=>{
    var res=await axios.get(`${apiurl()}/settings/getwebsettings`);
    return res.data;
}
const updatewebsettings=async(data)=>{
    const formData = new FormData();
    formData.append("website_name", data.website_name);
    formData.append("logo", data.logo);
    formData.append("favicon", data.favicon);
    formData.append("website_general_color", data.website_general_color);
    formData.append("id", data.id);
    var res=await axios.post(`${apiurl()}/settings/Updatewebsettings`,formData,{ headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
    return res.data;
}

const getbannersettings=async()=>{
    var res=await axios.get(`${apiurl()}/settings/getbannersettings`);
    return res.data;
}
const savebannerimages=async(data)=>{
    console.log(data)
    const formData = new FormData();
    for (let i = 0; i < data.length; i++) {
        formData.append('banner_image[]', data[i]);
    }
    var res=await axios.post(`${apiurl()}/settings/savebannerimages`,formData,{ headers: {"Content-Type": "multipart/form-data","Authorization" : `Bearer ${gettoken()}`}});
    return res.data;
}
export {getwebsettings,updatewebsettings,getbannersettings,savebannerimages};