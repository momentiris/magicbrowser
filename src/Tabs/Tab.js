import React from 'react';
import { SingleTabContainer, TabTitle, FavIcon, CloseButton } from './styles';

const Tab = ({ removeSelectedTab, setActive}) => {

  return (
    <SingleTabContainer onClick={setActive}>
      <FavIcon/>
      <TabTitle>title</TabTitle>
      <CloseButton onClick={removeSelectedTab} />
    </SingleTabContainer>
  );
};

export default Tab;
