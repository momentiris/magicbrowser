import styled from 'styled-components';
import Historybg from '../../common/assets/imgs/history_dummy.png';


export const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 9%;
  max-height: 100%;
  width: 81%;
  background: ${props => props.theme.dashboardgrey};
  transition: all 0.2s ease;
  transition-delay: 0.2s;
  opacity: ${props => props.isActive ? '1' : '0'};
  transform: translateY(${props => props.isActive ? '0%' : '-115%'});
`;

export const Wrapper = styled.div`
  height: 100%;

`;

export const BorderBottom = styled.div`
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.darkgrey};
  margin-bottom: 48px;

`;

export const Header3 = styled.h2 `
  font-family: latobold;
  font-size: ${props => props.theme.large};
  color: ${props => props.theme.black};
  font-tyle: bold;
  line-height: 29px;
  margin: 0px;
  height: 50px;
  transition: all 0.2s ease-out;
  transition-delay: 0.5s;
  opacity: ${props => props.isActive ? '1' : '0'};
  transform: translateY(${props => props.isActive ? '0%' : '-215%'});

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
  margin-right: 41%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  transition: all 0.2s ease-out;
  transition-delay: 0.5s;
  opacity: ${props => props.isActive ? '1' : '0'};
  transform: translateY(${props => props.isActive ? '0%' : '-215%'});
`;

export const VisualButton = styled.button`
  font-family: latoregular;
  background: ${props => props.theme.bluepurple};
  border: none;
  color: ${props => props.theme.white};
  border-radius: 4px 0px 0px 4px;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  transition: all .3s ease;
  cursor: pointer;
  height: 32px;
  width: 103px;
  text-align: center;
  font-size: ${props => props.theme.medium};
  &:active{
    background ${props => props.theme.bluebuttonactive};
  }
  svg {
    margin-right: 8px;
  }
`;

export const ListButton = styled.button`
  font-family: latoregular;
  background: ${props => props.theme.dashboardgrey};
  border: 2px solid ${props => props.theme.bluepurple};
  color: ${props => props.theme.bluepurple};
  border-radius: 0px 4px 4px 0px;
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
    background ${props => props.theme.white};
  }
  &:active{
    background ${props => props.theme.bluebuttonactive};
    color: ${props => props.theme.white};
  }
  svg {
    margin-right: 8px;
  }
`;

export const HistoryImg = styled.div`
  background: url(${Historybg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all .2s ease-out;
  opacity: ${props => props.isActive ? '1' : '0'};
  transition-delay: .1s;
  height: ${props => props.isActive ? '620px' : '0px'};
  width: 100%;
  border: 0;
`;
