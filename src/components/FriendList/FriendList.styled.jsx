import styled from '@emotion/styled';

export const Container = styled.ul`
  width: 345px;
  margin: auto;
  margin-top: 50px;
  padding: 0;
`;
export const Item = styled.li`
  background-color: white;
  margin-bottom: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  list-style: none;
  padding: 10px 10px 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const OnlineStatus = styled.span`
  color: black;
  width: 100%;
  max-width: 20px;
  height: 20px;
  display: inline-block;
  border-radius: 15px;
  margin-right: 10px;

  background-color: ${props => (props.isOnline ? '#06e306' : 'red')};
`;

export const Avatar = styled.img`
  width: 70px;
  background-color: #893b04;
  border-radius: 5px;
`;

export const Name = styled.p`
  display: inline-block;
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  margin-left: 15px;
`;
