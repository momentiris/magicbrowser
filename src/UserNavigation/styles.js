import styled from 'styled-components';

export const UserNavigationContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.lightergrey};
`;

export const PageNavigationContainer = styled.div`
  width: 130px;
  height: 32px;
  border: 1px solid black;
  flex-shrink: 0;
`;
