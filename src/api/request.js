import axios from "axios";
import { showMessage } from "@/utils";

const ins = axios.create();
ins.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      context: resp.data.msg,
      type: "error",
    });
  }
  return resp;
});

export default ins;
   