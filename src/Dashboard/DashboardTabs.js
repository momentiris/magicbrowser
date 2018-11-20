import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import {
  TabItems,
  Close,
  TabWrapper,
  AddIcon,
  AddNewTab,
  SavedLinks,
  SavedLinksHeader,
  SavedLinksItems,
  SavedLinksTitle,
  SavedLinksWrapper,
  SavedLinksFavicon,
  Wrapper,
  SavedLinksPositioning,
} from './styles';
import tabImage from '../common/assets/imgs/test.png';

const DashboardTabs = ({ tabs, active, currentWsUI, onSortEnd, addOneTab }) => {
  const SortableItem = SortableElement(({ value, tabindex }) => {
    return (
      <TabItems snapshot={tabImage}key={tabindex} id={tabindex} className={`${active && 'Showcase__style__stylizedHelper'}`}>
        {value}
        {value.id}
        <Close onClick={() => this.removeSelectedTab(tabindex)}></Close>
      </TabItems>
    );
  });

  const SortableList = SortableContainer(({ items }) => {
    return (
      <TabWrapper>
        <Wrapper>
          {items && items.map((item, index) => {
            return <SortableItem key={`item-${index}`} id={index} tabindex={index} index={index} value={item.title}> </SortableItem>;
          })}
          <AddNewTab onClick={() => addOneTab(currentWsUI)}>
            <AddIcon />
          </AddNewTab>
        </Wrapper>
      </TabWrapper>
    );
  });

  return (
    <SortableList items={tabs} onSortEnd={onSortEnd} axis='xy' />
  );
};

export default DashboardTabs;
