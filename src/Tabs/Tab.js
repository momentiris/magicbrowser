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
import TabLoader from '../common/TabLoader/TabLoader';

const Tab = ({ removeSelectedTab, setActive, isActive, favicon, title, id, src, key }) => (
  <SingleTabContainer
    id={id}
    key={key}
    isActive={isActive}

  >
    {
      favicon || src === 'dashboard' ?
        <FavIcon src={src === 'dashboard' && dashboardTabIcon || favicon || 'false'}/> :
        <TabLoader />
    }

    <TabTitle onClick={setActive} >{title || src}</TabTitle>
    <CloseTabButton isActive={isActive} onClick={removeSelectedTab}>
      <AddTabIcon tilt/>
    </CloseTabButton>
  </SingleTabContainer>
);

export default Tab;
