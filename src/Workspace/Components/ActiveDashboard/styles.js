import styled from 'styled-components';
import rightarrowsvg from '../../../common/assets/icons/rightarrow.svg';
import leftarrowsvg from '../../../common/assets/icons/leftarrow.svg';
import addiconsvg from '../../../common/assets/icons/add.svg';
import closeiconsvg from '../../../common/assets/icons/close.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 135px 0px 135px;
  background: ${props => props.theme.dashboardgrey};
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
  width: 280px
  height: 156px;
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
  width: 280px
  height: 156px;
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
  font-family: latobold;
  font-size: ${props => props.theme.large};
  color: ${props => props.theme.black};
  font-tyle: bold;
  line-height: 29px;
  margin: 0px;
`;

export const WorkspaceInfoWrapper = styled.div`
  display: flex;
  justify-content: row;
  padding-top: 6px;
`;

export const InfoHover = styled.div`
  margin: 0px 16px 0px 16px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  :hover {
    ::after {
      width: 100%;
    }
  }
    &:after {
      transition: width .25s ease-in;
      content: '';
      display: block;
      position: absolute;
      opacity: 1;
      align-self: center;
      height: 2px;
      width: 0%;
      background: ${props => props.theme.bluepurple};
      bottom: -1px;
    }
  &:last-child {
    margin-right: 0px;
  }
`;
export const WorkspaceInfo = styled.h4`
  font-family: latoregular;
  font-size: ${props => props.theme.medium};
  color: ${props => props.theme.semiblack};
  margin: 0px;
  font-weight: normal;
  line-height: normal;
  position: relative;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.black};
  }
`;

export const AddNewWs = styled.div`
  margin: 0px;
  padding-bottom: 32px;
`;

export const Input = styled.input`
  margin: 30px 0 24px 0px;
  background: none;
  width: 242px;
  height: 32px;
  font-size: 24px;
  border: none;
  padding: 0px;
  outline: none;
  ::placeholder {
    color: ${props => props.theme.darkgrey};
  }
  &:focus {
    transition: all 0.4s ease;
    margin: 30px 0 23px 0px;
    border-bottom: 1px solid rgba(91, 91, 91, 0.52);
  }
`;

export const AnimateForm = styled.div`
  transition: all .3s cubic-bezier(0,.72,.5,.99);
  overflow-y: hidden;
  opacity: ${props => props.isActive ? '1' : '0'}
  height: ${props => props.isActive ? '260px' : '0px'};
`;

export const AnimateEditForm = styled.div`
  transition: all .3s cubic-bezier(0,.72,.5,.99);
  overflow-y: hidden;
  opacity: ${props => props.isActive.id === props.id && props.isActive.active ? '1' : '0'}
  height: ${props => props.isActive.id === props.id && props.isActive.active ? '260px' : '0px'};
`;

export const NewWsHover = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 32%;
  transform: ${props => props.isActive ? 'translateX(-152px)' : 'translateX(-235px)'};
  width: 62px;
  height: 42px;
  background: ${props => props.color};
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0,.72,.5,.99);
`;

export const NewWsButton = styled.button`
  font-family: latoregular;
  background: none;
  border: none;
  color: ${props => props.theme.semiblack};
  padding: 6px 0px;
  margin: 6px 0 6px 0;
  text-align: left;
  text-decoration: none;
  outline: none;
  display: inline-block;
  font-size: ${props => props.theme.medium};
  transition: all .1s ease;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.black};
  }
  &:hover ${NewWsHover} {
    transform: translateX(-200px);
  }
`;

export const CreateButton = styled.button`
  background: ${props => props.theme.bluepurple};
  border: none;
  color: ${props => props.theme.white};
  padding: ${props => props.theme.paddingbutton};
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 12px;
  transition: all .1s ease;
  cursor: pointer;
  font-size: ${props => props.theme.medium};
  &:hover{
    background ${props => props.theme.bluebuttonhover};
  }
  &:active{
    background ${props => props.theme.bluebuttonactive};
  }
`;

export const CancelButton = styled.button`
  background: ${props => props.theme.dashboardgrey};
  color: ${props => props.theme.black};
  padding: ${props => props.theme.paddingbutton};
  box-shadow: inset 0 0 0 1px ${props => props.theme.semiblack};
  border: none;
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  transition: all .1s ease;
  cursor: pointer;
  font-size: ${props => props.theme.medium};
  &:hover{
    background ${props => props.theme.lightgrey};
  }
  &:active{
    background ${props => props.theme.mediumgrey};
  }
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

export const Add = styled.svg`
  position: absolute;
  background-image: url(${addiconsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
  transform: ${props => props.isActive ? 'rotate(45deg)' : 'rotate(0deg)'};
  margin: 0 0 0 -43px;
  transition: all .3s cubic-bezier(0,.72,.5,.99);
`;

export const AddIcon = styled.svg`
  background-image: url(${addiconsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 30px;
  width: 30px;
`;

export const LeftArrow = styled.svg`
  position: absolute;
  background-image: url(${leftarrowsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 13px;
  width: 13px;
  margin: 3px 0 0 -40px;
`;

export const RightArrowNewWs = styled.svg`
  background-image: url(${rightarrowsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 16px;
  width: 16px;
  margin-left: 36px;
`;

export const RightArrow = styled.svg`
  background-image: url(${rightarrowsvg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 16px;
  width: 16px;
  margin-left: 36px;
  transition: all .4s ease-out;
  transform: translateX(-15px)
`;
