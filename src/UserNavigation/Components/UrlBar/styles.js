import styled from 'styled-components';

export const UrlBarInput = styled.input`
  pointer-events: ${props => props.dashboardOpen ? 'auto' : props.disable ? 'none' : 'auto'};
  border: none;
  height: 30px;
  width: 100%;
  background: inherit;
  font-size: 16px;
  border-radius: ${props => props.theme.br};
  padding: 0;
  padding-left: 16px;
  &:focus {
    outline: none;

    ${'' /* background: #F3F4F7; */}

  }
`;
