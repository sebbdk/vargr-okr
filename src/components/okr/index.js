import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';

import OkrListName from './parts/list-name';
import Objective from './parts/objective';
import OkrTaskAdd from './parts/task-add';
import OkrTask from './parts/task';

import { getGroupedTasks, updateTask, addTask } from '../../store/okr';

function mapStateToProps(state){
	return {
		groupedTasks: getGroupedTasks(state)
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		updateTask,
		addTask
	}, dispatch);
}

function groupedProps(groupedTasks, updateTask, addTask = () => {} ) {
	return groupedTasks.map((group) => {
		const tasks = group.tasks.map((task, i) =>
			<OkrTask task={task} key={i} onChange={updatedTask => updateTask(updatedTask)}></OkrTask>
		);

		return <div className="okr-task-list" key={group.id}>
			<OkrListName></OkrListName>
			{tasks}
			<OkrTaskAdd groupId={group.id} onComplete={newTask => addTask(newTask)}></OkrTaskAdd>
		</div>;
	})
}

const Okr = ({ groupedTasks, updateTask, addTask }) => {
	return (
		<div className="okr-page">
			<Objective></Objective>
			{groupedProps(groupedTasks, updateTask, addTask)}
		</div>
	)
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Okr);