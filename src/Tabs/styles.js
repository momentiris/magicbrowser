import styled from 'styled-components';

export const Mainwrap = styled.section`
  width: 100vw;
  min-height: 38px;
  max-height: 38px;
  background: ${props => props.theme.darkgrey};
  -webkit-app-region: drag;
  padding-left: 5rem;
  display: flex;
  align-items: flex-end;
`;

export const SingleTabContainer = styled.div`
  width: 294px;
  height: 32px;
  border: 1px solid black;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px 5px 0 0;
  background: ${props => props.isActive ? props.theme.lightgrey : 'none'};
`;

export const TabTitle = styled.span`

`;

export const FavIcon = styled.img`
  display: inline;
  min-width: 25px;
  height: 25px;
  border: 1px solid black;
`;

export const CloseButton = styled.button`
  min-width: 27px;
  height: 27px;
  border: 1px solid black;
`;
