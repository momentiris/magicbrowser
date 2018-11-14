import styled from 'styled-components';
import { Button } from '../../../common/stylesheet';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.lightergrey};
  border-bottom: 1px solid ${props => props.theme.lightgrey};
`;

export const UrlBarContainer = styled.div`
  pointer-events: ${props => props.dashboardOpen ? 'auto' : props.show ? 'none' : 'auto'};
  display: flex;
  border: none;
  height: 32px;
  width: 100%;
  background: ${props => props.clicked ? 'white' : props.theme.lightgrey};
  font-size: 16px;
  border-radius: ${props => props.theme.br};
  padding: 0;
  margin: 0 8px 0 8px;
  transition: opacity 100ms ease ${props => !props.show ? '0ms' : '75ms'};
  opacity: ${props => props.dashboardOpen ? 1 : props.show ? 0 : 1};
  align-items: center;
  :hover {
    background: ${props => props.clicked ? 'white' : props.theme.greybuttonhover};
  }
`;

export const AddToReadingListButton = styled(Button)`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  :hover {
    background: ${props => props.theme.mediumgrey};
  }
  :active {
    background: ${props => props.theme.greybuttonactive};
  }
`;

export const ReadingListButton = styled(Button)`
  width: 91px;
  width: ${props => props.dashboardOpen ? '0px' : '91px'};
  height: 32px;
  background: ${props => props.theme.lightgrey};
  margin-right: 5px;
  overflow: hidden;
  position: relative;
  z-index: 100;
  transition: opacity 200ms ease, width 150ms ease;
  opacity: ${props => props.dashboardOpen ? 0 : 1};

  :hover {
    background: ${props => props.theme.mediumgrey};
  }
  :active {
    background: ${props => props.theme.greybuttonactive};
  }
`;

export const NavSettingsButton = styled(Button)`
  width: 24px;
  height: 32px;
  background: ${props => props.theme.lightergrey};
  margin-right: 5px;
  overflow: hidden;
  :hover {
    background: ${props => props.theme.mediumgrey};
  }
  :active {
    background: ${props => props.theme.greybuttonactive};
  }
`;

export const ReadListNavSettingsWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 100;
  background: ${props => props.theme.lightergrey};

`;
export const GoToDashboardButtonWrap = styled.div`
  display: flex;
  position: absolute;
  right: 126px;
  z-index: 50;
  transform: translatex(${props => props.dashboardOpen ? '70%' : props.toggle === 'true' ? 0 : '70%'});
  transition: opacity 200ms ease, transform 150ms ease;
  opacity: ${props => props.dashboardOpen ? 0 : props.toggle === 'true' ? 1 : 0};
  pointer-events: ${props => props.dashboardOpen ? 'none' : props.toggle === 'true' ? 'auto' : 'none'};
  margin-right: 8px;
  height: 32px;
  align-items: center;
  & > svg {
    flex-shrink: 0;
    margin-right: 8px;
  }
`;
export const PreToDashBoardButton = styled(Button)`
  width: 24px;
  height: 32px;
  margin-right: 7px;
  :hover {
    background: ${props => props.theme.mediumgrey};
  }
  :active {
    background: ${props => props.theme.greybuttonactive};
  }

`;
export const GoToDashboardButton = styled(Link)`
  width: 134px;
  height: 32px;
  background: ${props => props.theme.bluebuttonidle};
  border-radius: ${props => props.theme.br};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  :hover {
    background: ${props => props.theme.bluebuttonhover};
  }
  :active {
    background: ${props => props.theme.bluebuttonactive};
  }
  span {
    margin-left: 12px;
  }
`;
