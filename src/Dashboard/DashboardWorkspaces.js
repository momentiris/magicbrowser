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
  DeleteWs,
  RenameEditIcon,
  DeleteWsConfirmBox,
  DeleteWsOkeyButton,
  DeleteWsCancelButton,
  DeleteWsParagraph,
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
  animatesworkspace,
  editWorkspaceValue,
  deleteWorkspace,
}) => (
  <Ul name="workspaces" isActive={animatesworkspace}>
    {
      workspaces.map((ws, i) => (
        <Li key={i} data-ws={i}>
          <Button isTarget={currentWsUI === ws[0]}  data-ws={i} onMouseEnter={handleClick} value={ws[0]}>
            <Hover isTarget={currentWsUI === ws[0]} color={
              updateWorkspace.target === ws[0] &&
              updateWorkspace.newColor || ws[1].color || '#5C4EFF'}>
              <RightArrow shouldbeBlack={ws[1].color === 'white'}/>
            </Hover>
            {
              ws[0]
            }
          </Button>
          <RenameEdit isTarget={currentWsUI === ws[0]} onClick={() => editWorkspace(i)} value={ws[0]}>
            <RenameEditIcon />
            <p style={{position: 'absolute', marginLeft: '22px', top: '-5px', cursor: 'pointer'}}>Edit</p>
          </RenameEdit>
          <DeleteWs>
            Delete
            <DeleteWsConfirmBox>
              <DeleteWsParagraph>
                Delete workspace?
              </DeleteWsParagraph>
              <DeleteWsOkeyButton isTarget={currentWsUI === ws[0]} id={i} onClick={() => deleteWorkspace(ws[0])} value={ws[0]}>
                Okey
              </DeleteWsOkeyButton>
              <DeleteWsCancelButton type='button'>Cancel</DeleteWsCancelButton>
            </DeleteWsConfirmBox>
          </DeleteWs>
          <AnimateEditForm isActive={editWorkspaceToggle} id={i}>
            <form onSubmit={(e) => renameWorkspace(e)} style={{height: '100%'}}>
              <NewWsHover isActive={workspaceToggle} color={ws[1].color}>
                <RightArrowNewWs />
              </NewWsHover>
              <Input
                onChange={(e) => handleInputEditName(e, ws[0])}
                active={isActive}
                type="text"
                placeholder="Rename your workspace"
                value={editWorkspaceValue.newName}
              />
              <WsColor updateWsColor={(e) => handleInputEditColor(e, ws[0])}/>
              <CreateButton type="submit">Save</CreateButton>
              <CancelButton type="button">Cancel</CancelButton>
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
