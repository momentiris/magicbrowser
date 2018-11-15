import React from 'react';
import WsColor from './WsColors';
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
  isActive
}) => (
  <Ul name="workspaces">
    {
      workspaces.map((ws, i) => (
        <Li key={i} data-ws={i}>
          <Button isTarget={currentWsUI === ws[0]}  data-ws={i} onMouseDown={handleClick} value={ws[0]}>
            <Hover isTarget={currentWsUI === ws[0]} color={
              editWorkspace.target === ws[0] &&
              editWorkspace.newColor || ws[1].color || '#5C4EFF'}>
              <RightArrow shouldbeBlack={ws[1].color === 'white'}/>
            </Hover>
            {
              ws[0]
            }
          </Button>
          <RenameEdit isTarget={currentWsUI === ws[0]} onClick={() => this.editWorkspace(i)} value={ws[0]} />
          <AnimateEditForm isActive={editWorkspaceToggle} id={i}>
            <form onSubmit={(e) => this.renameWorkspace(e)} style={{height: '100%'}}>
              <NewWsHover isActive={workspaceToggle} color={ws[1].color}>
                <RightArrowNewWs />
              </NewWsHover>
              <Input
                onChange={(e) => this.handleInputEditName(e, ws[0])}
                active={isActive}
                type="text"
                placeholder="Rename your workspace"/>
              <WsColor updateWsColor={(e) => this.handleInputEditColor(e, ws[0])}/>
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
