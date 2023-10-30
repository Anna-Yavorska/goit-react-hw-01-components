import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.spacing(10)};
  padding: ${p => p.theme.spacing(10)} ${p => p.theme.spacing(15)};
  background-color: ${p => p.theme.colors.profileBackground};
`;

export const Box = styled.div`

`;

export const Title = styled.h2`
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
  background-color: ${p => p.theme.colors.white};
 padding: ${p => p.theme.spacing(8)};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  color: ${p => p.theme.colors.white};
`;

export const Item = styled.li`
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${getRandomHexColor};
  width: calc(100% / 5);
`;

export const Accent = styled.span`
margin-top: ${p => p.theme.spacing(2)};
font-size: 20px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}