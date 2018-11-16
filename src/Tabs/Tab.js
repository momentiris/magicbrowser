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
import '../Workspace/Components/sortableHelperStyles.css';

const Tab = ({ removeSelectedTab, setActive, isActive, favicon, title, id, src }) => {

  return (
    <SingleTabContainer className="Showcase__style__stylizedHelper" id={id} isActive={isActive} onClick={setActive}>
      <FavIcon src={favicon || 'false'}/>
      <TabTitle>{title || src}</TabTitle>
      <CloseTabButton isActive={isActive} onClick={removeSelectedTab}>
        <AddTabIcon tilt/>
      </CloseTabButton>
    </SingleTabContainer>
  );
};

export default Tab;
