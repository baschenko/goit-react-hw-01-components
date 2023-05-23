import PropTypes from 'prop-types';
import { Item, Avatar, Name, OnlineStatus } from './FriendList.styled';

const ListFriends = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <Avatar src={avatar} alt={name} width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
};

ListFriends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default ListFriends;
