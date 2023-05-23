import PropTypes from 'prop-types';
import {
  Container,
  Item,
  Avatar,
  Name,
  OnlineStatus,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Container className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <OnlineStatus isOnline={isOnline}></OnlineStatus>
          <Avatar src={avatar} alt={name} width="48" />
          <Name className="name">{name}</Name>
        </Item>
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
