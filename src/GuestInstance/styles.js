import styled from 'styled-components';

export const WebviewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => props.isActive ? 'block' : 'none'};
`;

export const WebviewContainerWrap = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;

`;

export const DashboardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => props.isActive ? 'block' : 'none'};
`;
