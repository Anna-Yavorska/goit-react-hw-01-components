import styled from 'styled-components';

const getBackgroundColor = props => props.children ? 'green' : 'red';

export const Item = styled.li`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  background-color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing(4)};
  margin-bottom: ${p => p.theme.spacing(4)};
  border: ${p => p.theme.radii.sm} solid #696969;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const Lighthouse = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${getBackgroundColor};
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${p => p.theme.radii.lg};
`;

export const Text = styled.p`
font-size: 25px;
font-weight: 500;
`;