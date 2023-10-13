
const gettoken=()=>{
    const token=JSON.parse(localStorage.getItem("rbkstoreapp"));
    return token;
}
const getuserdetails = () => {
    var token = gettoken();
   
    if (gettoken() != null) {
        try{
      var userData = JSON.parse(window.atob(token.split(".")[1]));
      return userData;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    } else {
      return null;
    }
  };
const removetoken=()=>{
   return localStorage.removeItem("rbkstoreapp");
}
export {gettoken,getuserdetails,removetoken};