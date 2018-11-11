import styled from 'styled-components';


export const Container = styled.div`
  padding: 70px 135px 0px 135px;
  background: ${props => props.theme.dashboardgrey};
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 88px;
`;

// Tabs and items
export const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

export const TabItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 193px
  height: 109px;
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.br};
  margin: 6px 6px 6px 6px;
  transition: all .1s ease;
  box-shadow: 0px 4px 10px rgba(200, 200, 200, 0.25);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const AddNewTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px
  height: 108px;
  background: ${props => props.theme.dashboardgrey};
  border-radius: ${props => props.theme.br};
  margin: 6px 6px 6px 6px;
  border: 1px solid ${props => props.theme.semiblack};
  transition: all .1s ease;
  box-shadow: 0px 4px 10px rgba(200, 200, 200, 0.25);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Header2 = styled.h2`
  font-size: ${props => props.theme.medium};
  color: ${props => props.theme.lightergrey}
`;

export const BorderBottom = styled.div`
  border-bottom: 1px solid ${props => props.theme.dashboardgrey};
  width: 100%;
`;
