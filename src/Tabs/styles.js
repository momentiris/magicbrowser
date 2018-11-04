import styled from 'styled-components';

export const Mainwrap = styled.section`
  width: 100vw;
  min-height: 38px;
  max-height: 38px;
  background: rgb(208, 208, 208);
  -webkit-app-region: drag;
  padding-left: 5rem;
  display: flex;
  align-items: flex-end;
`;

export const SingleTabContainer = styled.div`
  width: 200px;
  height: 30px;
  border: 1px solid black;
  display: flex;
  overflow-x: hidden;
  align-items: center;

  justify-content: space-between;
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
