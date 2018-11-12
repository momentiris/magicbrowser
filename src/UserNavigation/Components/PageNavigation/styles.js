import styled from 'styled-components';
import { Button } from '../../../common/stylesheet';

export const Container = styled.div`
  width: 130px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const PageNavButton = styled(Button)`
  width: 24px;
  height: 32px;
  margin-left: 12px;
  :hover {
    background: ${props => props.theme.greybuttonhover};
  }
  :active {
    background: ${props => props.theme.greybuttonactive};
  }
`;
