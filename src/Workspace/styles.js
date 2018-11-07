import styled from 'styled-components';

export const WorkspaceToggleWrap = styled.div`
  height: 32px;
  overflow-x: ${props => !props.open ? 'hidden' : 'visible'};
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
export const NewWsButtonContainer = styled.div`
  padding: 0 16px 0 8px;
`;
export const NewWsContainer = styled.div`
  position: relative;
  transition: width 100ms ease;
  width: ${props => props.toggleOpen ? '209px' : '26px'};
  height: 32px;
  border-radius: ${props => props.theme.br} ${props => props.theme.br} 0 0;
  background: ${props => props.toggleOpen ? props.theme.lightgrey : 'none'};
  margin: 0 8px 0 8px;
  display: flex;
  align-items: center;
  overflow: ${props => !props.open ? 'hidden' : 'visible'};
  &:focus {
    outline: none;
  }
  &:active {
    border: none;
  }
  &:hover {
    background: ${props => props.toggleOpen ? props.theme.lightgrey : props.theme.lightgrey};
  }
  svg {
    flex-shrink: 0;
  }
`;
export const InnerNewWsContainer = styled.div`

  position: absolute;
  display: flex;
  align-items: center;

`;
export const NewWsArrowContainer = styled.div`
  transition: transform 100ms ease;
  height: 10px;
  width: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.open ? 'rotate(180deg)' : 'none'};
  margin-right: 16px;
  margin-top: 2px;
`;

export const ColorPickerContainer = styled.div`
  position: absolute;
  background: ${props => props.theme.lightgrey};
  height: ${props => props.toggleDropdown ? '116px' : 0};
  width: 209px;
  bottom: 0;
  border-radius: 0 0 ${props => props.theme.br} ${props => props.theme.br};
  transform: translateY(100%);
  &::before {
    border-radius: 0 0 ${props => props.theme.br} ${props => props.theme.br};
    background: white;
    margin: 0 auto;
    content: "";
    width: 97%;
    height: 97%;
    display: block;
  }
`;

export const NewWsInput = styled.input`
  width: 132px;
  border: 1px solid black;
  height: 20px;
  background: none;
  font-size: 14px;
  padding-left: 4px;
  ::placeholder {
    font-size: 14px;
  }
  :focus {
    outline: none;
  }
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
