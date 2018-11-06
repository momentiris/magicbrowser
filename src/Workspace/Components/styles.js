import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Common
export const Container = styled.div`
  height: 100%;
  margin: 0px 135px 0px 135px;
`;


export const Column = styled.div`
  display: flex;
`;

export const WsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-direction: row-reverse;

`;
export const WsItems = styled.div`
  width: 196px;
  height: 110px;
  background: red;
  border: 1px solid black;
  border-radius: 4px;
  margin: 6px 6px 6px 6px;
`;

// Back / New space
export const Ua = styled.div`

`;

export const UaHeader = styled.h1`

`;


// Ws all
export const Ul = styled.ul`

`;

export const Li = styled.li`

`;

export const ItemLink = styled(Link)`

`;
