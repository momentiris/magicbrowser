import React, { Component } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import {
  TabItems,
  Close,
  TabWrapper,
  AddIcon,
  AddNewTab,
} from './styles';

const DashboardTabs = ({ tabs, active, currentWsUI, onSortEnd}) => {
  const SortableItem = SortableElement(({value, tabindex}) => {
    return (
      <TabItems key={tabindex} id={tabindex} className={`${active && 'Showcase__style__stylizedHelper'}`}>
        {value}
        {value.id}
        <Close onClick={() => this.removeSelectedTab(tabindex)}></Close>
      </TabItems>
    );
  });
  
  const SortableList = SortableContainer(({items}) => {
    return (
      <TabWrapper>
        {items.map((item, index) => {
          return <SortableItem  key={`item-${index}`} id={index} tabindex={index} index={index} value={item.src}> </SortableItem>;
        })}
        <AddNewTab onClick={() => this.addOneTab(currentWsUI)}>
          <AddIcon />
        </AddNewTab>
      </TabWrapper>
    );
  });

  return (
    <SortableList items={tabs} onSortEnd={onSortEnd} axis='xy' />
  );
};

export default DashboardTabs;
