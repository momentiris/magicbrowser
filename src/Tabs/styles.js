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
  display: flex;
  overflow-x: hidden;
  align-items: center;
  position: relative;
  border-radius: 5px 5px 0 0;
  background: ${props => props.isActive ? props.theme.lightgrey : 'none'};

  ${props => !props.isActive && `
    &:hover {
      background: rgba(234,234,234, 0.5);
    }
  `}
  &:before {

    content: "";
    display: block;
    width: 100%
    height: 100%;
    position: absolute;
    top:0;
    bottom:0;
    background: none;

    right:0;

  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    border-left: ${props => !props.isActive && props.id != 0 ? '1px solid' + props.theme.lightgrey : 'none'};

    height: 24px;
    vertical-align: center;
  }
`;

export const TabTitle = styled.span`
  font-size: 12px;
  margin: auto 0 auto auto;
`;

export const FavIcon = styled.img`
  display: inline;
  min-width: 17px;
  height: 17px;
  margin-left: 8px;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  margin-right: 8px;
  background: none;
  border: none;
  padding: 0;
  &:after {
    content: "X";
    display: block;
    color: black;
  }
`;
