import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MatchData } from "../interfaces/MatchData";
import api from "../services/api";

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
`;

const TheadStyled = styled.thead`
  background-color: #efefee;
`;

const ThStyled = styled.th`
  font-family: "Futura";
  background-color: #efefee;
  text-transform: uppercase;
  border: 1px solid #ddd;
`;

const TdStyled = styled.td`
  font-family: "Futura";
  background-color: #efefee;
  color: black;
  text-align: center;
  text-transform: uppercase;
  height: 150px;
  font-size: 25px;
  border: 1px solid #ddd;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScoreLabel = styled.label`
  padding: 10px;
`;

interface MatchTableProps {
  matches: MatchData[];
}

export default function MatchTable(props: MatchTableProps) {
  const navigate = useNavigate();

  const handleEditMatch = async (e: React.FormEvent, matchId: number) => {
    e.preventDefault();

    navigate(`/match/edit/${matchId}`);
  };

  const handleDeleteMatch = async (e: React.FormEvent, matchId: number) => {
    e.preventDefault();

    try {
      await api.deleteMatch(matchId);
      window.location.reload();
    } catch (error) {
      console.log("Erro ao deletar partida", error);
    }
  };

  return (
    <TableStyled>
      <TheadStyled>
        <tr>
          <ThStyled>Id</ThStyled>
          <ThStyled>Partida</ThStyled>
          <ThStyled>Sua Torcida</ThStyled>
          <ThStyled>Data</ThStyled>
          <ThStyled>Ações</ThStyled>
        </tr>
      </TheadStyled>
      <tbody>
        {props.matches.map((match: MatchData) => (
          <tr key={match.id}>
            <TdStyled>{match.id}</TdStyled>
            <TdStyled>
              <ScoreContainer>
                <img
                  src={match.teamOne.photoUrl}
                  alt={match.teamOne.name}
                  style={{ width: "120px", padding: "10px" }}
                />
                <ScoreLabel>{match.scoreTeamOne}</ScoreLabel>
                &nbsp;&nbsp;X&nbsp;&nbsp;
                <ScoreLabel>{match.scoreTeamTwo}</ScoreLabel>
                <img
                  src={match.teamTwo.photoUrl}
                  alt={match.teamTwo.name}
                  style={{ width: "120px", padding: "10px" }}
                />
              </ScoreContainer>
            </TdStyled>
            <TdStyled>
              <img
                src={match.supportedTeam.photoUrl}
                alt={match.supportedTeam.name}
                style={{ width: "120px", padding: "10px" }}
              />
            </TdStyled>
            <TdStyled>{format(new Date(match.date), "dd/MM/yyyy")}</TdStyled>
            <TdStyled>
              <IconButton
                onClick={(e: React.FormEvent) => handleEditMatch(e, match.id!)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={(e: React.FormEvent) =>
                  handleDeleteMatch(e, match.id!)
                }
              >
                <DeleteIcon />
              </IconButton>
            </TdStyled>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  );
}
