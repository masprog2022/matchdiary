import axios, { AxiosResponse } from "axios";
import { ReportsData } from "../interfaces/ReportsData";

interface Api {
  getReportsData: () => Promise<AxiosResponse<ReportsData>>;
}

const instance = axios.create({
  baseURL: "http://localhost:8083/api",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

const api: Api = {
  getReportsData: () => instance.get("/reports"),
};

export default api;
