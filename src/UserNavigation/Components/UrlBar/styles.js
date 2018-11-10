import styled from 'styled-components';

export const UrlBarInput = styled.input`
  pointer-events: ${props => props.disable ? 'none' : 'default'};
  border: none;
  height: 32px;
  width: 100%;
  background: ${props => props.theme.lightgrey};
  font-size: 16px;
  border-radius: ${props => props.theme.br};
  padding: 0;
  padding-left: 16px;
  transition: opacity 100ms ease ${props => !props.show ? '100ms' : '0ms'};
  opacity: ${props => props.show ? 0 : 1};
  &:focus {
    outline: none;
  }
`;
