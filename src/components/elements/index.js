import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Navigator = styled.div`
  margin: 10px;
`;

export const Arrow = styled.img`
  transform: ${props => `rotate(${props.deg}deg)`};
`;

export const Button = styled.button`
  width: 50px;
  margin-left: ${props =>
    props.id === "top" || props.id === "bottom" ? `25px;` : "0px;"};
`;
