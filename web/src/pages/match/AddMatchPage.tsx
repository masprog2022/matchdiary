import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Container from "../../components/Container";
import InputDate from "../../components/InputDate";
import InputScore from "../../components/InputScore";
import InputSelect from "../../components/InputSelect";
import { Navbar } from "../../components/Navbar";
import Title from "../../components/Title";
import api from "../../services/api";

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MatchInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;

  @media (min-width: 700px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const ScoreSeparator = styled.span`
  margin: 8px 0;

  @media (min-width: 700px) {
    margin: 0 16px;
  }
`;

const DivSection = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function AddMatchPage() {
  const [date, setDate] = useState<Date>(new Date());
  const [teamOptions, setTeamOptions] = useState<
    { label: string; value: number }[]
  >([]);
  const [teamOneId, setTeamOne] = useState<number>(0);
  const [scoreTeamOne, setScoreTeamOne] = useState<number>(0);
  const [scoreTeamTwo, setScoreTeamTwo] = useState<number>(0);
  const [teamTwoId, setTeamTwo] = useState<number>(0);
  const [supportedTeamId, setSupportedTeam] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await api.getTeamData();
        const teams = response.data.map((team: any) => ({
          label: team.name,
          value: team.id,
        }));
        setTeamOptions(teams);
      } catch (error) {
        console.error("Erro ao obter a lista de times:", error);
      }
    };

    fetchTeams();
  }, []);

  const teamOneOptions = teamOptions;
  const teamTwoOptions = teamOptions.filter(
    (option) => option.value !== teamOneId
  );
  const teamOneAndTwoOptions = teamOptions.filter(
    (option) => option.value === teamOneId || option.value === teamTwoId
  );

  const handleAddMatch = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.addMatch({
        date,
        scoreTeamOne,
        scoreTeamTwo,
        teamOneId,
        teamTwoId,
        supportedTeamId,
      });

      navigate("/match/list");
    } catch (error) {
      console.log("Erro ao adicionar partida", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title title="Adicionar partida" />
        <form onSubmit={handleAddMatch}>
          <MatchContainer>
            <div>
              <InputDate
                label="Data"
                selected={date}
                onChange={(newDate) => setDate(newDate)}
              />
            </div>

            <MatchInfoContainer>
              <DivSection>
                <InputSelect
                  label="Time 1"
                  options={teamOneOptions}
                  value={teamOneId}
                  onChange={(e) => setTeamOne(Number(e.target.value))}
                />
              </DivSection>
              <DivSection>
                <InputScore
                  min={0}
                  max={10}
                  type="number"
                  value={scoreTeamOne}
                  onChange={(e) => setScoreTeamOne(Number(e.target.value))}
                />
              </DivSection>
              <ScoreSeparator>X</ScoreSeparator>
              <DivSection>
                <InputScore
                  min={0}
                  max={10}
                  type="number"
                  value={scoreTeamTwo}
                  onChange={(e) => setScoreTeamTwo(Number(e.target.value))}
                />
              </DivSection>
              <DivSection>
                <InputSelect
                  label="Time 2"
                  options={teamTwoOptions}
                  value={teamTwoId}
                  onChange={(e) => setTeamTwo(Number(e.target.value))}
                />
              </DivSection>
            </MatchInfoContainer>
            <InputSelect
              label="Sua torcida"
              options={teamOneAndTwoOptions}
              value={supportedTeamId}
              onChange={(e) => setSupportedTeam(Number(e.target.value))}
            />
            <Button type="submit" name="Adicionar" />
          </MatchContainer>
        </form>
      </Container>
    </>
  );
}
