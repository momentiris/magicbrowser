import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Common
export const Container = styled.div`
  height: 100%;
  margin: 0px 135px 0px 135px;
`;


export const Column = styled.div`
  display: flex;
  width: 100%;
  transition: all .5s ease;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 16%;
  width: 80%;
  transition: all .5s ease;
`;


export const TabItems = styled.div`
  width: 196px
  height: 110px;
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.radius4};
  margin: 6px 6px 6px 6px;
  transition: all .1s ease;
  box-shadow: 0px 4px 10px rgba(200, 200, 200, 0.25);
  &:hover {
    transform: scale(1.1);
  }
`;

// Back / Create New space

export const AddNewWs = styled.div`
  margin: 40px 0 32px 0;
  opacity: ${props => props.toggle ? '0' : '1'};
`;

export const Input = styled.input`
  margin: 30px 0 24px 0;
  width: 242px;
  height: 32px;
  font-size: 24px;
  border: none;
  ::placeholder {
    color: ${props => props.theme.darkgrey};
  }
`;

export const CreateButton = styled.button`
  background-color: ${props => props.theme.bluepurple};
  border: none;
  color: ${props => props.theme.white};
  padding: ${props => props.theme.paddingbutton};
  border-radius: ${props => props.theme.radius4};
  text-decoration: none;
  outline: none;
  display: inline-block;
  font-size: ${props => props.theme.medium};
`;

export const CancelButton = styled.button`
  background-color: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};
  padding: ${props => props.theme.paddingbutton};
  border: 1px solid #5A5A5A;
  box-sizing: border-box;
  border-radius: ${props => props.theme.radius4};
  text-decoration: none;
  outline: none;
  display: inline-block;
  font-size: ${props => props.theme.medium};
`;



// Ws all
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  padding: 0px;
  margin: 0px;
`;

export const Li = styled.li`
  list-style: none;
  padding: 5px 0px;
  margin: 33px 0px 0px 0px;
  &:nth-child(1) {
    margin-top: 0px;
  }
`;

export const Hover = styled.div`
  position: absolute;
  transform: translateX(-220px);
  height: 20px;
  width: 100px;
  background: red;
  transition: all 0.2s ease-in;
`;

export const Button = styled.button`
  background-color: none;
  border: none;
  color: #000000;
  padding: 0px;
  text-align: left;
  width: 80%;
  text-decoration: none;
  outline: none;
  display: inline-block;
  font-size: ${props => props.theme.medium};
  &:hover ${Hover} {
    transform: translateX(-200px);
  }
`;
