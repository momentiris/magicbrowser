import styled from 'styled-components';

export const Container = styled.div`
  width: 362px;
  height: 100%;
  position: absolute;
  background: ${props => props.theme.lightergrey};
  right: 0;
  transition: transform 300ms ease;
  transform: translateX(${props => props.open ? 0 : '100%'});
  padding: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 24px;
`;
export const ImageWrap = styled.div`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.br};
  box-shadow: 0px 2px 10px rgba(116, 116, 116, 0.25);
  margin-right: 18px;
`;
export const Image = styled.img`

`;

export const MetaWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const Title = styled.span`
  font-family: latobold;
  margin-bottom: 4px;
`;

export const Src = styled.span`

`;
