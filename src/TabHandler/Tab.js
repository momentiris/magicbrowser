import React from 'react';
import { SingleTabContainer, TabTitle, FavIcon, CloseButton } from './styles';

const Tab = ({ removeSelectedTab }) => {
  return (
    <SingleTabContainer>
      <FavIcon/>
      <TabTitle>title</TabTitle>
      <CloseButton onClick={removeSelectedTab} />
    </SingleTabContainer>
  );
};

export default Tab;
