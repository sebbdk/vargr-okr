import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { getGroupedTasks } from "../../../store/okr.actions";

import OkrListName from './list-name';
import OkrTaskAdd from './task-add';
import OkrTask from './task';
import OkrAddGroup from './add-group';

import { updateTask, addTask, updateListName, deleteTask, addGroupBefore, closeGroup, moveTaskTo } from '../../../store/okr.actions';

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
        addGroupBefore,
        closeGroup,
        moveTaskTo
	}, dispatch);
}

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "grey"

});

export const GroupedProps = ({groupedTasks, updateTask, addTask, updateListName, deleteTask, addGroupBefore, closeGroup, moveTaskTo}) => {
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
                    <OkrAddGroup onAdd={() => addGroupBefore({title: 'New Group'}, group.id)}></OkrAddGroup>
                    <OkrListName value={group.title} onChange={title => updateListName(title, group.id)} onClose={() => closeGroup(group.id)}></OkrListName>
                    <Droppable droppableId={group.id || -1}>
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                            {group.tasks.length > 0 ? '' : <div class="okr-group-placeholder"></div>}
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
                </div>
            )
        })}
        </DragDropContext>
    );
};

export default connect(() => mapStateToProps, mapDispatchToProps)(GroupedProps);