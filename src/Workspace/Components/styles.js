import styled from 'styled-components';
import { Link } from 'react-router-dom';
import rightarrowsvg from '../../common/assets/icons/rightarrow.svg';
import leftarrowsvg from '../../common/assets/icons/leftarrow.svg';
import addiconsvg from '../../common/assets/icons/add.svg';
import closeiconsvg from '../../common/assets/icons/close.svg';
// Common
export const Container = styled.div`
  padding: 70px 135px 0px 135px;
  background: ${props => props.theme.dashboardgrey};
`;

export const Wrapper = styled.div`

`;


export const Column = styled.div`
  display: flex;
  width: 100%;
`;

// Tabs and items
export const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

export const TabItems = styled.div`
  width: 193px
  height: 109px;
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.br};
  margin: 6px 6px 6px 6px;
  transition: all .1s ease;
  box-shadow: 0px 4px 10px rgba(200, 200, 200, 0.25);
  &:hover {
    transform: scale(1.05);
  }
`;

export const AddNewTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px
  height: 108px;
  background: ${props => props.theme.dashboardgrey};
  border-radius: ${props => props.theme.br};
  margin: 6px 6px 6px 6px;
  border: 1px solid #5A5A5A;
  transition: all .1s ease;
  box-shadow: 0px 4px 10px rgba(200, 200, 200, 0.25);
  &:hover {
    transform: scale(1.05);
  }
`;

// Back / Create New space

export const AddNewWs = styled.div`
  margin: 0px 0 33px 0;
  opacity: ${props => props.toggle ? '0' : '1'};
`;

export const Input = styled.input`
  margin: 30px 0 24px 0px;
  background: none;
  width: 242px;
  height: 32px;
  font-size: 24px;
  border: none;
  padding: 0px;
  outline: none;
  ::placeholder {
    color: ${props => props.theme.darkgrey};
  }
  &:focus {
    transition: all 0.4s ease;
    margin: 30px 0 23px 0px;
    border-bottom: 1px solid rgba(91, 91, 91, 0.52);
  }
`;

export const AnimateForm = styled.div`
  transition: height .5s cubic-bezier(0,.72,.5,.99);
  overflow-y: hidden;
  height: ${props => props.isActive ? '180px' : '0px'};
`;

export const NewWsHover = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 32%;
  transform: ${props => props.isActive ? 'translateX(-152px)' : 'translateX(-235px)'};
  width: 62px;
  height: 42px;
  background: red;
  border-radius: 50px;
  transition: all 0.5s cubic-bezier(0,.72,.5,.99);
`;

export const ColorBox = styled.div`
  margin: 0 0 30px 0;
`;

export const ColorItem = styled.div`
  width: 24px;
  height: 24px;
  background: #A259FF;
  border-radius: 50%;
  &:active{
    border: 3px solid #DDDFE3;
    box-sizing: border-box;
  }
`;

export const NewWsButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  padding: 6px 0px;
  margin: 6px 0 6px 0;
  text-align: left;
  text-decoration: none;
  outline: none;
  display: inline-block;
  font-size: ${props => props.theme.medium};
  transition: all .1s ease;
  &:hover {
    font-weight: bold;
  }
  &:hover ${NewWsHover} {
    transform: translateX(-200px);
  }
`;

export const CreateButton = styled.button`
  background: ${props => props.theme.bluepurple};
  border: none;
  color: ${props => props.theme.white};
  padding: ${props => props.theme.paddingbutton};
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 12px;
  transition: all .1s ease;
  cursor: pointer;
  font-size: ${props => props.theme.medium};
  &:hover{
    background ${props => props.theme.bluebuttonhover};
  }
  &:active{
    background ${props => props.theme.bluebuttonactive};
  }
`;

export const CancelButton = styled.button`
  background: ${props => props.theme.dashboardgrey};
  color: ${props => props.theme.black};
  padding: ${props => props.theme.paddingbutton};
  box-shadow: inset 0 0 0 1px #5A5A5A;
  border: none;
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  transition: all .1s ease;
  cursor: pointer;


  font-size: ${props => props.theme.medium};
  &:hover{
    background ${props => props.theme.lightgrey};
  }
  &:active{
    background ${props => props.theme.mediumgrey};
  }
`;



// Ws all
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 325px;
  margin: 0px 118px 87px 0;
`;

export const Hover = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  transform: translateX(-182px);
  width: 62px;
  height: 42px;
  border-radius: 50px;
  background: red;
  transition: all .2s ease-in;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #000000;
  padding: 6px 0px;
  text-align: left;
  text-decoration: none;
  outline: none;
  display: inline-block;
  word-break: break-all;
  cursor: pointer;
  transition: all .1s ease;
  font-size: ${props => props.theme.large};

`;

export const RightArrowNewWs = styled.svg`
  background-image: url(${rightarrowsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 16px;
  width: 16px;
  margin-left: 36px;
`;

export const RightArrow = styled.svg`
  background-image: url(${rightarrowsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 16px;
  width: 16px;
  margin-left: 36px;
  transition: all .4s ease-out;
  transform: translateX(-15px)
`;

export const Li = styled.li`
  list-style: none;
  padding: 0px;
  margin: 33px 0px 0px 0px;
  &:nth-child(1) {
    margin-top: 0px;
  }
  &:hover ${Button} {
    font-weight: bold;
  }
  &:hover ${Hover} {
    transform: translateX(-152px);
  }
  &:hover ${RightArrow}{
    transform: translateX(0px);
  }
`;

export const TabLength = styled.p`
  font-size: ${props => props.theme.small};
  color: ${props => props.theme.black};
  margin: 0;
`;

export const LeftArrow = styled.svg`
  position: absolute;
  background-image: url(${leftarrowsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 13px;
  width: 13px;
  margin: 3px 0 0 -22px;
`;

export const Add = styled.svg`
  position: absolute;
  background-image: url(${addiconsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
  transform: ${props => props.isActive ? 'rotate(45deg)' : 'rotate(0deg)'};
  margin: 0 0 0 -25px;
  transition: all .4s cubic-bezier(0,.72,.5,.99);
`;


// Saved links

export const SavedLinks = styled.div`
  border-top: 1px solid #C4C4C4;
`;
