import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-react-11eaa-default-rtdb.firebaseio.com/",
});

export default instance;
