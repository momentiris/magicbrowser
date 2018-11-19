import styled from 'styled-components';

export const WorkspaceToggleWrap = styled.div`
  height: 32px;
  overflow-x: ${props => props.dashboardOpen ? 'hidden' : !props.toggleWorkspaces ? 'hidden' : !props.open ? 'hidden' : 'visible'};
  transition: width 200ms ease;
  background: ${props => props.theme.mediumdarkgrey};
  border-radius: ${props => props.theme.br};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: ${props => props.dashboardOpen ? 0 : props.width};
`;

export const WsRestContainer = styled.div`
  display: flex;
`;

export const WsItem = styled.div`
  user-select: none;
  flex-shrink: 0;
  display: inline;
  text-align: center;
  padding: 0 8px 0 8px;
  align-items: center;
  height: 32px;
  border-radius: ${props => props.theme.br};
  display: flex;
  margin-left: ${props => props.current ? 0 : '8px'};
  background: ${props => props.clicked ? props.theme.darkgrey : props.current ? props.theme.lightgrey : 'none'};
  transition: background ${props => props.theme.navhovertransition};
  &:hover {
    background: ${props => !props.current ? props.theme.mediumgrey : props.theme.darkgrey};
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
