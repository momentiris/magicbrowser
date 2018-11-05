import React from 'react';
import { SingleTabContainer, TabTitle, FavIcon, CloseButton } from './styles';

const Tab = ({ removeSelectedTab, setActive, isActive}) => {

  return (
    <SingleTabContainer isActive={isActive} onMouseDown={setActive}>
      <FavIcon/>
      <TabTitle>title</TabTitle>
      <CloseButton onClick={removeSelectedTab} />
    </SingleTabContainer>
  );
};

export default Tab;
