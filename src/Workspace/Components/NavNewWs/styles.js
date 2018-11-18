import styled from 'styled-components';

export const NewWsContainer = styled.div`
  position: relative;
  transition: width 100ms ease;
  width: ${props => props.toggleOpen ? '280px' : '26px'};
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

export const NewWsInput = styled.input`
  width: 117px;
  box-sizing: border-box;
  border: none;
  height: 20px;
  background: none;
  font-size: 12px;
  padding-left: 4px;
  padding-right: 4px;
  margin-left: 8px;
  ::placeholder {
    font-size: 12px;
  }
  :focus {
    outline: none;
  }
`;

export const NewWsButtonContainer = styled.div`
  padding: 0 8px 0 8px;
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
  height: ${props => props.toggleDropdown ? '140px' : 0};
  width: 280px;
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


export const InnerNewWsContainer = styled.div`
  display: flex;
  align-items: center;

`;


export const InnerColorPickerContainer = styled.div`
width: 224px;
flex-shrink: 0;
height: 48px;
display: flex;
justify-content: space-between;
align-items: space-between;

flex-flow: column wrap;
div {
  transition: transform 100ms ease;
  &:hover {
    transform: scale(1.2);
  }

}
svg {
  margin: 4px 4px 0 4px;
}

`;


export const NewWsColorInput = styled.select`
  border: 1px solid black;
  border-radius: ${props => props.theme.br};
  width: 117px;
  padding: 0;
  color: #848484;
  height: 100%;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;


export const NewWsColorInputWrapper = styled.div`
  height: 32px;
  width: 248px;
  margin-top:16px;
  align-items: center;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  ${'' /* margin-left: 10px;
  margin-top: 12px; */}

`;
