// <DragDropContext onDragEnd={this.onDragEnd}>
//   <Droppable droppableId={dragable}>
//     {provided => (
//       <div
//         innerRef={provided.innerRef}
//         {...provided.droppableProps}
//       >
//         {
//           tabs.map((tab, i) =>
//             <Draggable draggableId={dragable} key={i} index={i}>
//               {provided => (
//                 <div
//                   draggableId={dragable}
//                   id={i}
//                   index={i}
//                   key={i}>
//                   {tab.src}
//                   <button onClick={() => this.removeSelectedTab(i)} />
//                 </div>
//               )}
//             </Draggable>
//           )
//         }
//         {provided.placeholder}
//       </div >
//     )}
//   </Droppable>
// </DragDropContext>
