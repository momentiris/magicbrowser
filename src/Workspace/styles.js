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
  padding: 0 12px 0 8px;
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
  transform: ${props => props.open ? 'rotateX(180deg)' : 'none'};
  margin-right: 15px;
  margin-top: 2px;
  margin-left: 9px;
`;

export const ColorPickerContainer = styled.div`
  position: absolute;
  background: white;
  height: ${props => props.toggleDropdown ? '116px' : 0};
  width: 209px;
  opacity: ${props => props.toggleDropdown ? 1 : 0};
  bottom: 0;
  border-radius: 0 0 ${props => props.theme.br} ${props => props.theme.br};
  transform: translateY(100%);
  padding: 16px;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.lightgrey};
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  flex-flow: column nowrap;
  &::before {
    content: "";
    width: 97%;
    height: 96%;
    position: absolute;
    background: white;
    margin: 0 auto;
    z-index: -1;
    overflow: hidden;
    border-radius: 0 0 ${props => props.theme.br} ${props => props.theme.br};
  }

`;

export const InnerColorPickerContainer = styled.div`
width: 164px;
flex-shrink: 0;
height: 48px;
display: flex;
justify-content: space-between;
align-items: space-between;

flex-flow: column wrap;
svg {
  margin: 4px 4px 0 4px;
}

`;

export const NewWsColorInput = styled.input`
  border: none;
  width: 100%;
  padding: 0;
  padding-left: 4px;
  color: #848484;

  &:focus {
    outline: none;
  }
`;

export const NewWsColorDisplay = styled.div`
  height: 24px;
  width: 24px;
  border-right: 2px solid ${props => props.theme.borderradiuscolor};
`;
export const NewWsColorInputWrapper = styled.div`
  width: 90px;
  height: 24px;
  border: 2px solid ${props => props.theme.borderradiuscolor};
  border-radius: ${props => props.theme.br};
  flex-shrink: 0;
  display: flex;
  align-self: flex-start;
  margin-left: 10px;
  margin-top: 12px;
`;
export const NewWsInput = styled.input`
  width: 124px;
  box-sizing: border-box;
  border: none;
  height: 20px;
  background: none;
  font-size: 12px;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font-size: 12px;
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
