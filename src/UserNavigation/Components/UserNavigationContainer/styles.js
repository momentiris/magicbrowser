import styled from 'styled-components';
import { Button } from '../../../common/stylesheet';
import { Link } from 'react-router-dom';
import AddIconSvg from '../../../common/assets/icons/add.svg';

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
  border: ${props => props.clicked ? '1px solid rgba(71, 56, 249, .3)' : 'none'};
  background: ${props => props.clicked ? props.theme.dashboardgrey : props.theme.lightgrey};
  font-size: 16px;
  border-radius: ${props => props.theme.br};
  padding: 0;
  margin: 0 8px 0 8px;
  transition: opacity 100ms ease ${props => !props.show ? '0ms' : '75ms'}, background ${props => props.theme.navhovertransition};
  opacity: ${props => props.dashboardOpen ? 1 : props.show ? 0 : 1};
  align-items: center;
  :hover {
    background: ${props => props.clicked ? props.theme.dashboardgrey : props.theme.greybuttonhover};
  }
`;

export const AddIcon = styled.div`
  background: url(${AddIconSvg});
  background-size: contain;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  transition: all .2s ease;

  animation: ${props => props.isActive ? 'myOrbit' : '' ? 'myOrbit' : false } 0.4s linear;
  @keyframes myOrbit {
    from {
      transform: rotate(-120deg) translateX(0px) rotate(0deg);
      opacity: 1;
    }
    to   {
      transform: rotate(0deg) translateX(80px) rotate(180deg);
      opacity: 0.2;
    }
  }

`;

export const AddToReadingListButton = styled(Button)`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: background ${props => props.theme.navhovertransition};
  :hover {
    background: ${props => props.theme.lightergrey};
  }
  :active {
    background: ${props => props.theme.greybuttonactive};
  }
`;

export const ReadingListButton = styled(Button)`
  width: 91px;
  width: ${props => props.dashboardOpen ? '0px' : '91px'};
  height: 32px;

  background: ${props => props.savedLinksOpen ? props.theme.darkgrey : props.theme.lightgrey};
  margin-right: 5px;
  overflow: hidden;
  position: relative;
  z-index: 100;
  transition: opacity 200ms ease, width 150ms ease, background ${props => props.theme.navhovertransition};
  opacity: ${props => props.dashboardOpen ? 0 : 1};

  :hover {
    background: ${props => props.savedLinksOpen ? props.theme.darkgrey : props.theme.mediumgrey};
  }
  :active {
    background: ${props => props.savedLinksOpen ? props.theme.darkgrey : props.theme.greybuttonactive};
  }

  animation: ${props => props.isActive ? 'shake' : ''} .82s cubic-bezier(.36,.07,.19,.97) both;
  animation-delay: 300ms;
  @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
    background: ${props => props.isActive ? props.theme.darkgrey : props.theme.mediumgrey};
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  100%, 20% {
    background: #58c373;
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`;

export const NavSettingsButton = styled(Button)`
  width: 24px;
  height: 32px;
  background: ${props => props.theme.lightergrey};
  margin-right: 5px;
  overflow: hidden;
  transition: background ${props => props.theme.navhovertransition};
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
  transition: background ${props => props.theme.navhovertransition};
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
