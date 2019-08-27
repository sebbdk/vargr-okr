import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { getGroupedTasks } from "../../../store/okr.actions";

import OkrListName from './list-name';
import OkrTaskAdd from './task-add';
import OkrTask from './task';
import OkrAddGroup from './add-group';

import { updateTask, addTask, updateListName, deleteTask, addGroupAfter, closeGroup, moveTaskTo } from '../../../store/okr.actions';

function mapStateToProps(state) {
	return {
		groupedTasks: getGroupedTasks(state),
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
        updateTask,
        addTask,
        updateListName,
        deleteTask,
        addGroupAfter,
        closeGroup,
        moveTaskTo
	}, dispatch);
}

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "grey"

});

export const GroupedProps = ({groupedTasks, updateTask, addTask, updateListName, deleteTask, addGroupAfter, closeGroup, moveTaskTo}) => {
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        moveTaskTo(result.draggableId, result.destination.index, result.destination.droppableId)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        {groupedTasks.map((group, index) => {
            return (
                <div className="okr-task-list" key={group.id || -1}>
                    <OkrListName value={group.title} onChange={title => updateListName(title, group.id)} onClose={() => closeGroup(group.id)}></OkrListName>
                    <Droppable droppableId={group.id || -1}>
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                            {group.tasks.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>
                                            <OkrTask
                                                task={item}
                                                onWaste={id => deleteTask(id)}
                                                key={item.id}
                                                disabled={item.disabled}
                                                onChange={updatedTask => updateTask(updatedTask)}>
                                            </OkrTask>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                    <OkrTaskAdd groupId={group.id} onComplete={newTask => addTask(newTask)}></OkrTaskAdd>
                    <OkrAddGroup onAdd={() => addGroupAfter({title: 'New Group'}, group.id)}></OkrAddGroup>
                </div>
            )
        })}
        </DragDropContext>
    );
};

export default connect(() => mapStateToProps, mapDispatchToProps)(GroupedProps);