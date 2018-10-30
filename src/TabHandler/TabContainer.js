import React, { Component } from 'react';
import Tab from './Tab';
import { Mainwrap } from './styles';

const TabContainer = ({ tabs }, ...rest) => {
  return (
    <Mainwrap {...rest}>
      {
        tabs && tabs.map((tab, i) => <Tab key={i}/>)
      }
    </Mainwrap>
  );

};


export default TabContainer;
