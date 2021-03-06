import React, { Component } from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import Tab from './Tab';

import {
  Mainwrap,
  AddTabButton
} from './styles';

import { AddTabIcon } from '../common/assets/icons';
import '../Workspace/Components/sortableHelperStyles.css';



class TabContainer extends Component {

  onSortEnd = async ({oldIndex, newIndex}, { target }) => {
    if (target.dataset.ws) {
      console.log(target.dataset.ws);
    }
    const newTabs = arrayMove(this.props.tabs, oldIndex, newIndex);
    // await this.props.setActive(newIndex);
    await this.props.handleDragDashBoardTab({newTabs, newIndex});
  };

  render() {
    const {
      tabs,
      removeSelectedTab,
      addOneTab,
      setActive,
      active,
      registerContextMenuEvents,
      handleDashboardOpenUI
    } = this.props;

    const SortableItem = SortableElement(({ value, tabIndex, key }) => (
      <Tab
        index={key}
        registerContextMenuEvents={registerContextMenuEvents}
        id={tabIndex}
        isActive={tabIndex === active}
        key={key}
        setActive={() => setActive(tabIndex)}
        removeSelectedTab={() => removeSelectedTab(tabIndex)}
        favicon={value.favicon}
        title={value.title}
        src={value.src}
        handleDashboardOpenUI={handleDashboardOpenUI}
      />
    ));

    const SortableList = SortableContainer(({ items }) => (
      <Mainwrap className="tabsMainWrap">
        {items.map((tab, i) => {
          return <SortableItem  value={tab} key={`index-${i}`} tabIndex={i} index={i} />;
        })}

        <AddTabButton onClick={addOneTab}>
          <AddTabIcon />
        </AddTabButton>
      </Mainwrap>
    ));

    return (
      <SortableList
        lockToContainerEdges={true}

        lockAxis="x"
        distance={10}
        items={tabs}
        onSortEnd={this.onSortEnd}
        axis='x'
      />

    );
  }
}



export default TabContainer;
