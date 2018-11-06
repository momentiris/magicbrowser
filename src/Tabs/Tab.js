import React from 'react';
import { SingleTabContainer, TabTitle, FavIcon, CloseButton } from './styles';

const Tab = ({ removeSelectedTab, setActive, isActive, favicon, title, id }) => {

  return (
    <SingleTabContainer id={id} isActive={isActive} onMouseDown={setActive}>
      <FavIcon src={favicon || 'false'}/>
      <TabTitle>{title}</TabTitle>
      <CloseButton onClick={removeSelectedTab} />
    </SingleTabContainer>
  );
};

export default Tab;
