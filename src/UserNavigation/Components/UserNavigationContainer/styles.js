import styled from 'styled-components';
import { Button } from '../../../common/stylesheet';
import { Link } from 'react-router-dom';

export const Container = styled.div`
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

export const UrlBarContainer = styled.div`
  pointer-events: ${props => props.show ? 'none' : 'default'};
  display: flex;
  border: none;
  height: 32px;
  width: 100%;
  background: ${props => props.theme.lightgrey};
  font-size: 16px;
  border-radius: ${props => props.theme.br};
  padding: 0;
  margin: 0 8px 0 8px;

  transition: opacity 100ms ease ${props => !props.show ? '100ms' : '0ms'};
  opacity: ${props => props.show ? 0 : 1};
  align-items: center;
`;

export const AddToReadingListButton = styled(Button)`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  :hover {
    background: ${props => props.theme.mediumgrey};
  }
`;

export const ReadingListButton = styled(Button)`
  width: 91px;
  height: 32px;
  background: ${props => props.theme.lightgrey};
  margin-right: 5px;
  overflow: hidden;
  position: relative;
  z-index: 100;
  :hover {
    background: ${props => props.theme.mediumgrey};
  }
`;

export const NavSettingsButton = styled(Button)`
  width: 24px;
  height: 32px;
  background: ${props => props.theme.lightgrey};
  margin-right: 5px;
  overflow: hidden;
  :hover {
    background: ${props => props.theme.mediumgrey};
  }
`;

export const ReadListNavSettingsWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 100;
  background: ${props => props.theme.lightergrey};

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
  position: absolute;
  right: 126px;
  transform: translatex(${props => props.toggle === 'true' ? 0 : '95%'});
  z-index: 50;
  margin-right: 8px;
  transition: opacity .3s ease, transform 200ms ease, margin-right .2s ease ${props => props.toggle === 'true' ? '0s' : '.2s'};
  opacity: ${props => props.toggle === 'true' ? 1 : 0};
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
