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

const DashboardTabs = ({ tabs, active, currentWsUI, onSortEnd, addOneTab, savedLinks}) => {

  const SortableItem = SortableElement(({value, tabindex}) => {
    return (
      <TabItems key={tabindex} id={tabindex} className={`${active && 'Showcase__style__stylizedHelper'}`}>
        {value}
        {value.id}
        <Close onClick={() => this.removeSelectedTab(tabindex)}></Close>
      </TabItems>
    );
  });

  // const SortableItemSavedLinks = SortableElement(({value, saveindex}) => {
  //   return (
  //     <SavedLinksItems key={saveindex} id={saveindex} className={`${active && 'Showcase__style__stylizedHelper'}`}>
  //       <SavedLinksFavicon/>
  //       <SavedLinksTitle>
  //         {value}
  //         {value.id}
  //       </SavedLinksTitle>
  //     </SavedLinksItems>
  //
  //
  //     {
  //       savedLinks.map((item, index) => {
  //         return <SortableItemSavedLinks key={`item-${index}`} id={index} savindex={index} index={index} value={item.src}></SortableItemSavedLinks>;
  //       })
  //     }
  //
  //
  //   );
  // });

  const SortableList = SortableContainer(({items, savedLinks}) => {
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
        <SavedLinks>
          <SavedLinksHeader>
            Saved Links
          </SavedLinksHeader>
          <SavedLinksWrapper>
            <SavedLinksPositioning>
              {savedLinks && savedLinks.map((item, index) => {
                return <SortableItem  key={`item-${index}`} id={index} tabindex={index} index={index} value={item.title}> </SortableItem>;
              })}
            </SavedLinksPositioning>
          </SavedLinksWrapper>
        </SavedLinks>
      </TabWrapper>
    );
  });

  return (
    <SortableList items={tabs} savedLinks={savedLinks} onSortEnd={onSortEnd} axis='xy' />
  );
};

export default DashboardTabs;
