import styled from 'styled-components';

export const WorkspaceToggleWrap = styled.div`
  height: 32px;
  overflow-x: hidden;
  transition: width 300ms ease;
  background: ${props => props.theme.mediumdarkgrey};
  border-radius: ${props => props.theme.br};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 8px;
  width: ${props => props.width};
`;

export const WsRestContainer = styled.div`
  display: flex;
`;

export const WsItem = styled.div`
  flex-shrink: 0;
  display: inline;
  text-align: center;
  padding: 0 8px 0 8px;
  align-items: center;
  height: 32px;
  border-radius: ${props => props.theme.br};
  display: flex;
  margin-left: ${props => props.current ? 0 : '8px'};
  background: ${props => props.current ? props.theme.darkgrey : 'none'};
  cursor: pointer;

  &:hover {
    background: ${props => !props.current ? props.theme.mediumgrey : ''};
  }
  span {
    margin-left: 12px;
    pointer-events: none;
    vertical-align: middle;
  }
  svg {
    pointer-events: none;
  }
`;
