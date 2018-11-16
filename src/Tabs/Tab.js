import React from 'react';
import {
  SingleTabContainer,
  TabTitle,
  FavIcon,
  CloseTabButton
} from './styles';

import {
  AddTabIcon
} from '../common/assets/icons.js';

import dashboardTabIcon from '../common/assets/icons/dashboardTabIcon.svg';
import './transitions.css';

const Tab = ({ removeSelectedTab, setActive, isActive, favicon, title, id, src, key }) => (
  <SingleTabContainer
    id={id}
    key={key}
    isActive={isActive}
    onClick={setActive}
  >
    <FavIcon src={src === 'dashboard' && dashboardTabIcon || favicon || 'false'}/>
    <TabTitle>{title || src}</TabTitle>
    <CloseTabButton isActive={isActive} onClick={removeSelectedTab}>
      <AddTabIcon tilt/>
    </CloseTabButton>
  </SingleTabContainer>
);

export default Tab;
