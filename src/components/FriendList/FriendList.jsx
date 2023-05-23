import ListFriends from './ListFriends';
import { Container } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Container className="friend-list">
      {friends.map(friend => (
        <ListFriends
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Container>
  );
};

export default FriendList;
