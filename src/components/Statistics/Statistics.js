import { Wrapper, Title, Box, List, Item, Accent } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
      <Wrapper>
        <Box>
          {title && <Title>{title}</Title>}
          <List>
            {stats.map(stat => (
              <Item key={stat.id}>
                <span>{stat.label}</span>
                <Accent>{stat.percentage}%</Accent>
              </Item>
            ))}
          </List>
        </Box>
      </Wrapper>
    );
}