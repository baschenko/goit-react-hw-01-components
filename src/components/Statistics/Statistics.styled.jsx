import styled from '@emotion/styled';

export const Container = styled.section`
  width: 345px;
  margin: auto;
  margin-top: 50px;
  background-color: white;
  border-radius: 10px;
  padding-top: 25px;
`;

export const NameEvent = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #5a5959;
  margin-bottom: 40px;
  font-size: 22px;
`;

export const StatList = styled.ul`
  display: flex;
  /* justify-content: space-around; */
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Item = styled.li`
  background-color: #${() =>
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)};
  width: 100%;
  padding-top: 10px;
  padding-bottom: 15px;
  text-align: center;
  color: white;
  font-size: 20px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
`;
