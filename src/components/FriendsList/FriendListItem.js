import { Item, Lighthouse, Avatar, Text } from './FriendsListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <Item>
        <Lighthouse>{isOnline}</Lighthouse>
        <Avatar src={avatar} alt={name} />
        <Text>{name}</Text>
      </Item>
    );
}