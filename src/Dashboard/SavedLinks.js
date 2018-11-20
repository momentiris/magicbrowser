import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import {
  TabItems,
  Close,
  TabWrapper,
  AddIcon,
  AddNewTab,
  SavedLinksContainer,
  SavedLinksHeader,
  SavedLinksItems,
  SavedLinksTitle,
  SavedLinksWrapper,
  SavedLinksFavicon,
  Wrapper,
  SavedLinksPositioning,
} from './styles';

const SavedLinks = ({ active, currentWsUI, onSortEndSavedLinks, savedLinks }) => {
  const SortableItem = SortableElement(({value, saveindex}) => {
    return (
      <SavedLinksItems key={saveindex} id={saveindex} className={`${active && 'Showcase__style__stylizedHelper'}`}>
        <SavedLinksFavicon/>
        <SavedLinksTitle>
          {value}
          {value.id}
        </SavedLinksTitle>
      </SavedLinksItems>
    );
  });

  const SortableList = SortableContainer(({ items }) => {
    return (
      <SavedLinksContainer>
        <SavedLinksHeader>
          Saved Links
        </SavedLinksHeader>
        <SavedLinksWrapper>
          <SavedLinksPositioning>
            {
              savedLinks && savedLinks.map((item, index) => {
                return <SortableItem key={`item-${index}`} id={index} savindex={index} index={index} value={item.src} />;
              })
            }
          </SavedLinksPositioning>
        </SavedLinksWrapper>
      </SavedLinksContainer>
    );
  });

  return (
    <SortableList items={savedLinks} onSortEndSavedLinks={onSortEndSavedLinks} axis='xy' />
  );
};

export default SavedLinks;
