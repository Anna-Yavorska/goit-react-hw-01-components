import {
  Wrapper,
  CardWrapper,
  InfoWrapper,
  Avatar,
  Text,
  AccentText,
  List,
  Item,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  const statsArray = Object.entries(stats);
  return (
    <Wrapper>
      <CardWrapper>
        <InfoWrapper>
          <Avatar src={avatar} alt={username} />
          <Text>
            <AccentText>{username}</AccentText>
          </Text>
          <Text>@{tag}</Text>
          <Text>{location}</Text>
        </InfoWrapper>
        <List>
          {statsArray.map(item => (
            <Item key={item[0]}>
              <Text>{item[0]}</Text>
              <AccentText>{item[1]}</AccentText>
            </Item>
          ))}
        </List>
      </CardWrapper>
    </Wrapper>
  );
};
