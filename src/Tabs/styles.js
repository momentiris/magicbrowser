import styled from 'styled-components';
import { Button } from '../common/stylesheet';

export const Mainwrap = styled.section`
  min-height: 38px;
  max-height: 38px;
  background: ${props => props.theme.mediumgrey};
  -webkit-app-region: no-drag;
  padding-left: 5rem;
  display: flex;
  align-items: flex-end;
`;

export const SingleTabContainer = styled.div`
  width: 282px;
  height: 32px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  position: relative;
  border-radius: 5px 5px 0 0;
  ${'' /* z-index: ${props => props.isActive ? 10 : 'auto'}; */}
  background: ${props => props.isActive ? props.theme.lightergrey : 'none'};

  ${props => !props.isActive && `
    :hover {
      background: #F5F5F5;
      button {
        ::after {
          background: linear-gradient( to right, rgba(255,255,255,0) 0%, #F5F5F5 89%, #F5F5F5 100%);
        }
      }
    }
  `}
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    border-left: ${props => !props.isActive && props.id != 0 ? '1px solid' + props.theme.darkgrey : 'none'};

    height: 24px;
    vertical-align: center;
  }
`;

export const TabTitle = styled.span`
  font-size: 12px;
  user-select: none;
  white-space: nowrap;
  overflow-x: hidden;
  position: relative;
  margin-left: auto;
  width: 100%;
  text-align: center;
`;

export const FavIcon = styled.img`
  display: inline;
  min-width: 17px;
  height: 17px;
  margin-left: 12px;
  margin-right: 8px;
`;

export const CloseTabButton = styled(Button)`
  width: 14px;
  height: 14px;
  margin-left: auto;
  margin-right: 8px;
  margin-top: 2px;
  position: relative;
  transition: background ${props => props.theme.navhovertransition};
  :hover {
    background: ${props => props.theme.greybuttonhover};

  }
  :active {
    background: ${props => props.theme.greybuttonactive};
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;

    background: linear-gradient(
      to right,
      rgba(255,255,255,0) 0%,
      ${props => props.isActive ?
    props.theme.lightergrey :
    props.theme.mediumgrey} 89%,
    ${props => props.isActive ?
    props.theme.lightergrey :
    props.theme.mediumgrey} 100%);
    pointer-events: none;
  }
`;


export const AddTabButton = styled(Button)`
  width: 24px;
  height: 24px;
  margin-bottom: 3px;
  margin-left: 4px;
  margin-right: 5px;
  position: relative;
  transition: background ${props => props.theme.navhovertransition};
  :hover {
    background: ${props => props.theme.lightergrey};
  }
  :active {
    background: ${props => props.theme.lightergrey};
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: -5px;
    border-left: 1px solid ${props => props.theme.darkgrey};
    height: 24px;
    vertical-align: center;
  }
`;
