import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Common
export const Container = styled.div`
  height: 100%;
  padding: 70px 135px 0px 135px;
  background: ${props => props.theme.dashboardgrey};
`;

export const Wrapper = styled.div`

`;


export const Column = styled.div`
  display: flex;
  width: 100%;
  transition: all .5s ease;
`;

// Tabs and items
export const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  transition: all .5s ease;
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
  transition: height .2s ease-in;
  overflow-y: hidden;
  height: ${props => props.isActive ? '180px' : '0px'};
`;

export const NewWsHover = styled.div`
  position: absolute;
  top: 32%;
  transform: ${props => props.isActive ? 'translateX(-152px)' : 'translateX(-235px)'};
  width: 62px;
  height: 42px;
  background: red;
  border-radius: 50px;
  transition: all 0.2s ease-in;
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
  transition: all 0.1s ease-in;
  &:hover {
    font-weight: bold;
  }
  &:hover ${NewWsHover} {
    transform: translateX(-200px);
  }
`;

export const CreateButton = styled.button`
  background-color: ${props => props.theme.bluepurple};
  border: none;
  color: ${props => props.theme.white};
  padding: ${props => props.theme.paddingbutton};
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 12px;
  font-size: ${props => props.theme.medium};
`;

export const CancelButton = styled.button`
  background-color: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};
  padding: 5px 22px;
  border: 1px solid #5A5A5A;
  box-sizing: border-box;
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  font-size: ${props => props.theme.medium};
`;



// Ws all
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 20%;
  margin: 0px 181px 87px 0;
`;

export const Li = styled.li`
  list-style: none;
  padding: 0px;
  margin: 33px 0px 0px 0px;
  &:nth-child(1) {
    margin-top: 0px;
  }
`;

export const TabLength = styled.p`
  font-size: ${props => props.theme.small};
  color: ${props => props.theme.black};
  margin: 0;
`;

export const Hover = styled.div`
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
  font-size: ${props => props.theme.medium};
  &:hover {
    font-weight: bold;

  }
  &:hover ${Hover} {
    transform: translateX(-152px);
  }
`;


// Saved links

export const SavedLinks = styled.div`
  border-top: 1px solid #C4C4C4;
`;
