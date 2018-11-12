import React, { Component } from 'react';
import Tab from './Tab';
import {
  Mainwrap,
  AddTabButton
} from './styles';
import { Link } from 'react-router-dom';
import { AddTabIcon } from '../common/assets/icons';

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
              src={tab.src}

            />
          ) ;
        })
      }
      <AddTabButton onClick={addOneTab}>
        <AddTabIcon />
      </AddTabButton>
    </Mainwrap>
  );

};


export default TabContainer;
