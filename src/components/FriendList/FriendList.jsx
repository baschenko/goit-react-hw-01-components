import PropTypes from 'prop-types';
import { Container } from './FriendList.styled';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <Container className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
         id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
