import React, { Component } from 'react';
import Tab from './Tab';
import { Mainwrap } from './styles';
import { Link } from 'react-router-dom';

const TabContainer = ({ tabs, removeSelectedTab, addOneTab, setActive, active }) => {

  return (
    <Mainwrap>
      {
        tabs && tabs.map((tab, i) => {
          return(
            <Tab
              id={i}
              isActive={i === active}
              key={i}
              setActive={() => setActive(i)}
              removeSelectedTab={() => removeSelectedTab(i)}
              favicon={tab.favicon}
              title={tab.title}

            />
          ) ;
        })
      }
      <button onClick={addOneTab}>Add one tab</button>
    </Mainwrap>
  );

};


export default TabContainer;
