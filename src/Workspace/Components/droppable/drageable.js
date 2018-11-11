import React, { Component, Fragment } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
class Drop extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    console.log(this.props);
  }
  onDragStart = (e) => {

  };
  onDragUpdate = () => {

  };
  onDragEnd = () => {

  };


  render() {
    const dragable = JSON.stringify(this.props.tabs[0]);
    const { tabs } = this.props;
    return (
      <div>
        <Droppable droppableId={dragable}>
          {(provided) => (
            <div
              innerRef={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                tabs.map((tab, i) =>
                  <div
                    id={i}
                    key={i}>
                    {tab.src}
                    <button onClick={() => this.removeSelectedTab(i)} />
                  </div>
                )
              }
              {provided.placeholder}
            </div >
          )}
        </Droppable>
      </div>
    );
  }
}



export default Drop;
