import PropTypes from 'prop-types';
import { Avatar, Item, Name, OnlineStatus } from "./FriendList.styled";



const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <Item>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <Avatar src={avatar} alt={name} width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
