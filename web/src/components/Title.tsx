import styled from "styled-components";

const PageTitle = styled.h1`
  font-weight: bold;
  font-size: 35px;
`;
const TitleBorder = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  border: 3px solid #1a1a1a;
  width: 307px;
  margin-top: -10px;
  margin-bottom: 50px;

  @media only screen and (max-width: 338px) {
    width: 90%;
  }
`;

interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps) {
  return (
    <>
      <PageTitle>{props.title}</PageTitle>
      <TitleBorder />
    </>
  );
}
