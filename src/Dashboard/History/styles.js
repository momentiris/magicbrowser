import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.dashboardgrey};
`;

export const BorderBottom = styled.div`
  width: 100%;
`;

export const Header2 = styled.h2`
  font-family: latobold;
  font-size: ${props => props.theme.large};
  color: ${props => props.theme.black};
  font-tyle: bold;
  line-height: 29px;
  margin: 0px;
  height: 50px;
  border-bottom: 1px solid ${props => props.theme.darkgrey};
`;

export const WorkSpaceColor = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50px;
  margin: 10px 0px 0px -40px;
  background: ${props => props.color};
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 44%;
  left: 40%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const VisualButton = styled.button`
  font-family: latoregular;
  background: ${props => props.theme.bluepurple};
  border: none;
  color: ${props => props.theme.white};
  padding: ${props => props.theme.paddingbutton};
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  transition: all .3s ease;
  cursor: pointer;
  height: 32px;
  width: 103px;
  text-align: center;
  font-size: ${props => props.theme.medium};
  &:hover{
    background ${props => props.theme.bluebuttonhover};
  }
  &:active{
    background ${props => props.theme.bluebuttonactive};
  }
  svg {
    margin-right: 8px;
  }
`;

export const ListButton = styled.button`
  font-family: latoregular;
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.bluepurple};
  color: ${props => props.theme.bluepurple};
  padding: ${props => props.theme.paddingbutton};
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  transition: all .3s ease;
  cursor: pointer;
  height: 32px;
  width: 103px;
  text-align: center;
  font-size: ${props => props.theme.medium};
  &:hover{
    background ${props => props.theme.bluebuttonhover};
    color: ${props => props.theme.white};
  }
  &:active{
    background ${props => props.theme.bluebuttonactive};
  }
  svg {
    margin-right: 8px;
  }
`;
