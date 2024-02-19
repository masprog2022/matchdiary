import axios, { AxiosResponse } from "axios";
import { MatchData } from "../interfaces/MatchData";
import { ReportsData } from "../interfaces/ReportsData";
import { TeamData } from "../interfaces/TeamData";

interface Api {
  getReportsData: () => Promise<AxiosResponse<ReportsData>>;
  deleteTeam: (id: number) => Promise<AxiosResponse<any>>;
  getTeamData: () => Promise<AxiosResponse<TeamData[]>>;
  addTeam: (teamData: TeamData) => Promise<AxiosResponse<any>>;
  getMatchData: () => Promise<AxiosResponse<MatchData[]>>;
  deleteMatch: (id: number) => Promise<AxiosResponse<any>>;
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

  getMatchData: () => instance.get("/match/all"),
  deleteTeam: (id: number) => instance.delete(`/team/${id}`),
  deleteMatch: (id: number) => instance.delete(`/match/${id}`),
  addTeam: (teamData: TeamData) => instance.post("/team", teamData),
};

export default api;
