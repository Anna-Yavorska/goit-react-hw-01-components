import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 750px;
  padding: ${p => p.theme.spacing(30)} ${p => p.theme.spacing(40)};
  background-color: ${p => p.theme.colors.profileBackground};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.spacing(10)};
`;
export const CardWrapper = styled.div`
  border-radius: ${p => p.theme.radii.lg};
  border: ${p => p.theme.radii.md} solid #696969;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;
export const InfoWrapper = styled.div`
  padding: ${p => p.theme.spacing(4)};
  background-color: ${p => p.theme.colors.white};
`;

export const Avatar = styled.img`
  border-radius: 50%;
  max-width: 150px;
  max-height: 150px;
  margin: ${p => p.theme.spacing(10)} auto;
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.spacing(2)};
  font-size: 25px;
  text-align: center;
  color: ${p => p.theme.colors.grey};
`;

export const AccentText = styled.b`
  color: ${p => p.theme.colors.black};
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  background-color: ${p => p.theme.colors.socialBackground};
`;

export const Item = styled.li`
  padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(3)};
  display: flex;
  flex-direction: column;
  font-size: 25px;
  text-transform: capitalize;
  text-align: center;
  border: ${p => p.theme.radii.sm} solid #c0c0c0;
  width: calc(100% / 3);
`;