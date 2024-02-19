import axios, { AxiosResponse } from "axios";
import { ReportsData } from "../interfaces/ReportsData";
import { TeamData } from "../interfaces/TeamData";

interface Api {
  getReportsData: () => Promise<AxiosResponse<ReportsData>>;
  deleteTeam: (id: number) => Promise<AxiosResponse<any>>;
  getTeamData: () => Promise<AxiosResponse<TeamData[]>>;
}

const instance = axios.create({
  baseURL: "http://localhost:8083/api",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

const api: Api = {
  getReportsData: () => instance.get("/reports"),
  getTeamData: () => instance.get("/team/all"),
  deleteTeam: (id: number) => instance.delete(`/team/${id}`),
};

export default api;
