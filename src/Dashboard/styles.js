import styled from 'styled-components';
import { Link } from 'react-router-dom';
import rightarrowsvg from '../common/assets/icons/rightarrow.svg';
import leftarrowsvg from '../common/assets/icons/leftarrow.svg';
import addiconsvg from '../common/assets/icons/add.svg';
import closeiconsvg from '../common/assets/icons/close.svg';
import renameoreditsvg from '../common/assets/icons/renameoredit.svg';
// Common
export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.dashboardgrey};
  padding: 70px 135px 70px 135px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  ${'' /* min-height: 250px; */}
`;

export const InnerColorPickerContainer = styled.div`
  width: 164px;
  flex-shrink: 0;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-flow: column wrap;
  svg {
    margin: 4px 4px 0 4px;
  }
`;

export const ColorPickerContainer = styled.div`
  margin: 0px 0px 24px -3px;
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
`;

// Tabs and items
export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  min-height: 300px;
  min-width: 816px;
  border-top: 1px solid ${props => props.theme.darkgrey};
  opacity: ${props => props.isActive ? '0' : '1'};
  transition: all 1.2s ease-out;
  transition-delay: 0.6s;
  transform: translateX(${props => props.isActive ? '100%' : '0%'});
`;
export const Header3 = styled.h3`
  position: relative;
  bottom: 15px;
  opacity: 0;
  margin: 0px;
  font-size: 24px;
  transition: all .2s ease;
  cursor: pointer;
`;
export const TabItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 193px;
  height: 109px;
  background-image: url(${props => props.snapshot});
  background-size: contain;
  border-radius: ${props => props.theme.br};
  margin: 6px 6px 6px 6px;
  transition: all .2s ease;
  box-shadow: 0px 4px 10px rgba(200, 200, 200, 0.25);
  cursor: pointer;
  &:hover ${Header3} {
    opacity: 1;
  }
  &:hover {
    opacity: 0.6;
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
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

// Back / Create New space

export const AddNewWs = styled.div`
  margin: 0px;
  padding-bottom: 18px;
  opacity: ${props => props.isActive ? '0' : '1'};
  transition: all .2s ease;
  transition-delay: .2s;
  transform: translateY(${props => props.isActive ? '-155%' : '0%'});

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
  top: 0%;
  transform: ${props => props.isActive ? 'translateX(-152px)' : 'translateX(-235px)'};
  width: 62px;
  height: 42px;
  background: ${props => props.color};
  border-radius: 50px;
  transition: all 0.3s cubic-bezier(0,.72,.5,.99);
`;

export const ColorBox = styled.div`
  margin: 0 0 30px 0;
`;

export const ColorItem = styled.div`
  width: 24px;
  height: 24px;
  background: #A259FF;
  border-radius: 50%;
  &:active{
    border: 3px solid #DDDFE3;
    box-sizing: border-box;
  }
`;

export const NewWsButton = styled.button`
  font-family: latoregular;
  background: none;
  border: none;
  color:  ${props => props.theme.semiblack};;
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
  font-family: latoregular;
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
  font-family: latoregular;
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

// Ws all
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 325px;
  padding-top: 48px;
  margin-right: 110px;
  opacity: ${props => props.isActive ? '0' : '1'}
  transition: all .2s ease-out;
  transition-delay: .2s;
  transform: translateX(${props => props.isActive ? '-95%' : '0%'});
`;

export const Hover = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  transform: translateX(${props => props.isTarget ? '-152px' : '-182px'});
  width: 62px;
  height: 42px;
  border-radius: 50px;
  background: ${props => props.color};
  transition: transform .2s ease, background .1s ease;
  svg {
    transform: translateX(${props => props.isTarget ? '0px' : '-15px'});
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-family: latobold;
  color: ${props => props.isTarget ? props.theme.black : props.theme.semiblack};
  padding: 6px 0px;
  text-align: left;
  text-decoration: none;
  outline: none;
  display: inline-block;
  word-break: break-all;
  cursor: pointer;
  transition: all .15s ease;
  font-size: ${props => props.theme.large};
`;

export const RenameEdit = styled.button`
  background: none;
	color: inherit;
	border: none;
  transform: translateX(0px);
  opacity: 0;
  margin: 0 0 0 0;
  ${'' /* transition: all .2s cubic-bezier(0,.72,.5,.99); */}
  transition: all .2s ease;
  cursor: pointer;
`;

export const RenameEditIcon = styled.svg`
  background-image: url(${renameoreditsvg});
  background-repeat: no-repeat;
  background-size: contain;
  padding-left: 22px;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const DeleteWs = styled.button`
  position: absolute;
  background: ${props => props.theme.red};
  width: 52px;
  height: 24px;
  box-shadow: 0px 3px 3px rgba(200, 200, 200, 0.25);
  border-radius: ${props => props.theme.br};
  transform: translateX(0px);
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.small};;
  border: none;
  text-shadow: 1px 1px 3px rgba(188, 56, 47, 0.2);
  opacity: 0;
  margin: 10px 0 0 0;
  transition: all .2s ease .1s;
  cursor: pointer;
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
  //fix this so u can have black color
  background-repeat: no-repeat;
  background-size: contain;
  height: 16px;
  width: 16px;
  margin-left: 36px;
  transition: all .4s ease-out;
  transform: translateX(-15px)
`;

export const Li = styled.li`
  list-style: none;
  padding: 0px;
  margin: 33px 0px 0px 0px;
  &:nth-child(1) {
    margin-top: 0px;
  }

  &:hover ${Button} {
    color: ${props => props.theme.black};
  }
  &:hover ${Hover} {
    transform: translateX(-152px);
  }
  &:hover ${RightArrow}{
    transform: translateX(0px);
  }
  &:hover ${RenameEdit}{
    margin: 5px 0 0 22px;
    opacity: 1;
  }
  &:hover ${DeleteWs} {
    margin: 10px 0 0 28px;
    opacity: 1;
  }
`;

export const TabLength = styled.p`
  font-size: ${props => props.theme.small};
  color: ${props => props.theme.black};
  margin: -22px 0px;
`;

export const LeftArrow = styled.svg`
  position: absolute;
  background-image: url(${leftarrowsvg});
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(180deg);
  height: 13px;
  width: 13px;
  margin: 3px 0 0 -40px;
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

export const Close = styled.div`
  align-self: flex-end;
  position: relative;
  bottom: 28px;
  background-image: url(${closeiconsvg});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 7px;
  height: 14px;
  width: 14px;
  transition: all .2s cubic-bezier(0,.72,.5,.99);
  cursor: pointer;
  &:hover {
    transform: scale(1.4);
  }
`;
export const WsWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -43px;
  align-items: center;
`;

export const TabsHeader = styled.h2`
  margin-left: 353px;
  font-family: latoregular;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${props => props.theme.medium};
`;

export const BorderBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

export const HistoryButton = styled.button`
  position: absolute;
  right: 135px;
  display: flex;
  align-items: center;
  font-family: latoregular;
  background: ${props => props.theme.bluepurple};
  border: none;
  color: ${props => props.theme.white};
  padding: ${props => props.theme.paddingbutton};
  border-radius: ${props => props.theme.br};
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  transition: all .1s ease;
  cursor: pointer;
  height: 32px;
  font-size: ${props => props.theme.medium};
  z-index: 1;
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

export const WorkspaceInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  padding: 18px 0px;
  border-bottom: 1px solid ${props => props.theme.darkgrey};
`;

// Saved links
export const SavedLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 58px;
  padding-top: 48px;
`;

export const SavedLinksWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.darkgrey};
  padding-top: 48px;
  min-height: 100px;
`;

export const SavedLinksPositioning = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
`;

export const SavedLinksHeader = styled.h3`
  font-family: latoregular;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${props => props.theme.medium};
  margin: 0;
  color: ${props => props.theme.semiblack}
  margin-bottom: 24px;
`;

export const SavedLinksItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 264px;
  height: 110px;
  padding: 12px;
  box-shadow: 0px 4px 10px rgba(200, 200, 200, 0.25);
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.br};
  margin: 6px 6px 6px 6px;
  transition: all .1s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const SavedLinksFavicon = styled.svg`
  background: red;
  height: 40px;
  width: 40px;
  margin-right: 12px;
  box-shadow: 0px 2px 10px rgba(116, 116, 116, 0.25);
  border-radius: ${props => props.theme.br};
`;

export const SavedLinksTitle = styled.h3`
  max-width: 190px;
  overflow: hidden;
  word-break: break-all;
  margin: 0px;
`;


export const AnimateTabs = styled.div`
  transition: all 0.2s ease-out;
  transition-delay: .2s;
  opacity: ${props => props.isActive ? '0' : '1'};
  transform: translateY(${props => props.isActive ? '-95%' : '0%'});
`;
