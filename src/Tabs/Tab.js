import React from 'react';
import { SingleTabContainer,
  TabTitle,
  FavIcon,
  CloseButton
} from './styles';
import { TabLoader } from '../common/tabloader';

const Tab = ({ removeSelectedTab, setActive, isActive, favicon, title, id, src }) => {

  return (
    <SingleTabContainer id={id} isActive={isActive} onMouseDown={setActive}>
      <FavIcon src={favicon || 'false'}/>
      <TabTitle>{title || src}</TabTitle>
      <CloseButton onClick={removeSelectedTab} />
    </SingleTabContainer>
  );
};

export default Tab;
