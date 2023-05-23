import styled from '@emotion/styled';

export const Container = styled.table`
  margin: auto;
  margin-top: 50px;
  width: 700px;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  text-align: center;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  color: #ededed;
  background-color: #15bcde;
  padding: 15px 0;
  text-transform: uppercase;
  border-left: 1px solid #cfc8c8;
  border-right: 1px solid #cfc8c8;
`;

export const TableRows = styled.tr`
  &:nth-of-type(2n + 2) {
    background-color: #dadae1;
  }
`;

export const TableСells = styled.td`
  padding: 15px 0;
  text-transform: capitalize;
  color: #6c6b6b;
  font-weight: 500;
  border-left: 1px solid #cfc8c8;
  border-right: 1px solid #cfc8c8;
`;
