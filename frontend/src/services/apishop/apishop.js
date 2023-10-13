import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";

const getcategory=async()=>{
   var res=await axios.get(`${apiurl()}/category/getcategory`);
   return res.data;
}
const getproducts=async(params)=>{
   var res=await axios.get(`${apiurl()}/api/getproducts`,{params});
   return res.data;
}

export {getcategory,getproducts};