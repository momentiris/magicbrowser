import styled from 'styled-components';

export const WorkspaceToggleWrap = styled.div`
  height: 32px;
  width: 118px;
  overflow-x: hidden;
  background: ${props => props.theme.mediumdarkgrey};
  border-radius: ${props => props.theme.br};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 8px;
`;

export const WsIcon = styled.div`
  flex-shrink: 0;
  display: inline;
  text-align: center;
  padding: 0 8px 0 8px;
  align-items: center;
  height: 32px;
  border-radius: ${props => props.theme.br};
  border: 1px solid black;
  display: flex;
  margin-left: 8px;
  &:hover {
    background: ${props => props.theme.mediumgrey};
  }
`;
