import styled from 'styled-components';

export const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const TableTitle = styled.th`
  text-transform: uppercase;
  background-color: #00bfff;
  color: ${p => p.theme.colors.white};
  font-weight: 500;
  border: ${p => p.theme.radii.sm} solid ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing(4)};
`;

export const TableItem = styled.tr`
  text-transform: capitalize;
  &:nth-child(even) {
    background-color: ${p => p.theme.colors.socialBackground};
  }
`;

export const Text = styled.td`
  border: ${p => p.theme.radii.sm} solid
    ${p => p.theme.colors.profileBackground};
  padding: ${p => p.theme.spacing(4)};
`;