import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const InputDiv = styled.div`
  width: 92%;
`;

const LabelStyled = styled.p`
  font-family: "Futura";
  color: #000;
  text-transform: uppercase;
  font-weight: lighter;
`;

const StyledDatePicker = styled(ReactDatePicker)`
  flex: 1;
  font-family: "Futura";
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 10px;
  background-color: #efefee;
  color: #000;
  outline: none;
  font-size: 16px;
  margin-bottom: 16px;
  z-index: 1;
  transition: 0.3s ease;

  &:hover {
    background-color: #e3e3e3;
  }
`;

interface InputDateProps {
  label: string;
  selected: Date;
  onChange: (date: Date) => void;
}

export default function InputDate(props: InputDateProps) {
  return (
    <InputDiv>
      <LabelStyled>{props.label}</LabelStyled>
      <StyledDatePicker
        selected={props.selected}
        onChange={(date: Date) => props.onChange(date as Date)}
        dateFormat="dd/MM/yyyy"
      />
    </InputDiv>
  );
}
