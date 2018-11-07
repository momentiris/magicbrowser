import styled from 'styled-components';

export const UrlBarInput = styled.input`
  border: none;
  height: 32px;
  width: 100%;
  background: ${props => props.theme.lightgrey};
  font-size: 16px;
  border-radius: ${props => props.theme.br};
  padding: 0;
  margin: 0 8px 0 8px;
  padding-left: 16px;

  &:focus {
    outline: none;
  }
`;
