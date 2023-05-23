import styled from '@emotion/styled';

export const Container = styled.div`
  width: 345px;
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
  padding-top: 50px;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  color: gray;
  margin-top: 50px;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 150px;
  margin: auto;
  text-align: center;
  border-radius: 80px;

  background-color: beige;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: black;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  background-color: #dfe0e5;
  padding: 0;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 50px;
`;

export const Items = styled.li`
  border: 1px solid #b7b7b7;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  width: 100%;
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
`;
export const Quantity = styled.span`
  display: block;
  margin-top: 10px;
  font-weight: 600;
  color: black;
`;
