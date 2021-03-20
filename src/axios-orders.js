import axios from "axios";

axios.create({
  baseURL: "https://my-burger-react-11eaa-default-rtdb.firebaseio.com/",
});

export default axios;
