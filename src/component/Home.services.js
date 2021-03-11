import Axios from "axios";

// const REACT_APP_API_URL = "https://jsonplaceholder.typicode.com"

const headers = {
    "Content-Type": "application/json",
  };
var AxiosMethod;

const GetData = (URL, method, Body) => {
    console.log("body",Body)
    if (method === "get") {
        AxiosMethod = Axios.get
    }else if (method === "post") {
        AxiosMethod = Axios.post
    }else if (method === "put") {
        AxiosMethod = Axios.put
    }else if (method === "delete") {
        AxiosMethod = Axios.delete
    } 
    return AxiosMethod(
        URL,
        Body,
        {
          headers,
        }
      );
  };

  export default {
    GetData
  };