import styled from 'styled-components';

export const WebviewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => props.isActive ? 'block' : 'none'};
`;

export const WebviewContainerWrap = styled.div`
  height: 100%;
  width: 100%;
`;

export const DashboardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => !props.isActive ? 'block' : 'none'};
`;
