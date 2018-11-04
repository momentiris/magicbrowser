import React, { Component } from 'react';
import Tab from './Tab';
import { Mainwrap } from './styles';

const TabContainer = ({ tabs, removeSelectedTab, addOneTab, setActive }) => {
  return (
    <Mainwrap>
      {
        tabs && tabs.map((tab, i) =>
          <Tab
            key={i}
            setActive={() => setActive(i)}
            removeSelectedTab={() => removeSelectedTab(i)}
          />)
      }
      <button onClick={addOneTab}>Add one tab</button>
    </Mainwrap>
  );

};


export default TabContainer;
