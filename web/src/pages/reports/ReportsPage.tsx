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
        </CardContainer>
      </Container>
    </>
  );
}
