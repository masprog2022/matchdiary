import BiggerCard from "../../components/BiggerCard";
import Card from "../../components/Card";
import CardContainer from "../../components/CardContainer";
import Container from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import Title from "../../components/Title";

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <Container>
        <Title title="O resumo do seu diário de torcedor!" />
        <CardContainer>
          <Card value="89" description="partidas" />
          <Card value="43" description="vitórias" />
          <Card value="48%" description="de aproveitamento" />

          <BiggerCard
            teamUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/800px-Flamengo_braz_logo.svg.png"
            teamName="Flamengo"
            description="o time que você mais acompanha!"
          />
          <BiggerCard
            value="12 dias"
            description="sem acompanhar uma partida"
          />
        </CardContainer>
      </Container>
    </>
  );
}
