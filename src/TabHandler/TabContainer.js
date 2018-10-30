import React, { Component } from 'react';
import Tab from './Tab';
import { Mainwrap } from './styles';

const TabContainer = ({ tabs, removeSelectedTab, addOneTab }) => {
  return (
    <Mainwrap>
      {
        tabs && tabs.map((tab, i) => <Tab key={i} removeSelectedTab={() => removeSelectedTab(i)} />)
      }
    </Mainwrap>
  );

};


export default TabContainer;
