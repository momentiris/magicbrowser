import styled from 'styled-components';

export const UrlBarInput = styled.input`
  pointer-events: ${props => props.disable ? 'none' : 'default'};
  border: none;
  height: 32px;
  width: 100%;
  background: inherit;
  font-size: 16px;
  border-radius: ${props => props.theme.br};
  padding: 0;
  padding-left: 16px;
  &:focus {
    outline: none;
    background: white;
  }
`;