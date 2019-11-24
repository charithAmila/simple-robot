import styled from "styled-components";

export const Table = styled.table`
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 600px;
  height: 600px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Td = styled.td`
  width: 20% !important;
  height: 20% !important;
  border: 1px solid #ddd;
  padding: 8px;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
