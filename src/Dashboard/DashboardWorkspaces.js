import React from 'react';
import WsColor from './WsColors';
import { CSSTransition } from 'react-transition-group';
import './transition.css';

import {
  Ul,
  Li,
  Hover,
  Button,
  RightArrow,
  RenameEdit,
  AnimateEditForm,
  NewWsHover,
  RightArrowNewWs,
  Input,
  CreateButton,
  CancelButton,
  TabLength,
} from './styles';

const DashboardWorkspaces = ({
  workspaces,
  currentWsUI,
  handleClick,
  renameWorkspace,
  editWorkspace,
  handleInputEditName,
  handleInputEditColor,
  workspaceToggle,
  editWorkspaceToggle,
  onToggleRename,
  isActive,
  updateWorkspace,
  animatetoggle,
}) => (
  <Ul name="workspaces">
    {
      workspaces.map((ws, i) => (
        <Li key={i} data-ws={i}>
          <Button isTarget={currentWsUI === ws[0]}  data-ws={i} onMouseDown={handleClick} value={ws[0]}>
            <Hover isTarget={currentWsUI === ws[0]} color={
              updateWorkspace.target === ws[0] &&
              updateWorkspace.newColor || ws[1].color || '#5C4EFF'}>
              <RightArrow shouldbeBlack={ws[1].color === 'white'}/>
            </Hover>
            {
              ws[0]
            }
          </Button>
          <RenameEdit isTarget={currentWsUI === ws[0]} onClick={() => editWorkspace(i)} value={ws[0]} />
          <AnimateEditForm isActive={editWorkspaceToggle} id={i}>
            <form onSubmit={(e) => renameWorkspace(e)} style={{height: '100%'}}>
              <NewWsHover isActive={workspaceToggle} color={ws[1].color}>
                <RightArrowNewWs />
              </NewWsHover>
              <Input
                onChange={(e) => handleInputEditName(e, ws[0])}
                active={isActive}
                type="text"
                placeholder="Rename your workspace"/>
              <WsColor updateWsColor={(e) => handleInputEditColor(e, ws[0])}/>
              <CreateButton onClick={onToggleRename} type="submit">Save</CreateButton>
              <CancelButton onClick={onToggleRename} type="button">Cancel</CancelButton>
            </form>
          </AnimateEditForm>
          <br />
          <TabLength>
            {`${ws[1].tabs.length} ${ws[1].tabs.length > 1 ? 'Tabs' : 'Tab'}`}
          </TabLength>
        </Li>
      ))
    }
  </Ul>
);

export default DashboardWorkspaces;
