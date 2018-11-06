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
  transition: all 0.5s ease;
`;

export const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 9%;
  width: 80%;
  transition: all 0.5s ease;
`;


export const TabItems = styled.div`
  width: 196px
  height: 110px;
  background: red;
  border: 1px solid black;
  border-radius: 4px;
  margin: 6px 6px 6px 6px;
  transition: all 0.5 ease;
`;

// Back / New space
export const Ua = styled.div`

`;

export const UaHeader = styled.h1`

`;


// Ws all
export const Ul = styled.ul`
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
  margin-left: -220px;
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
  font-size: 16px;
  &:hover ${Hover} {
    margin-left: -200px;
  }
`;
