import styled from 'styled-components';

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
