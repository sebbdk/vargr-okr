import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';

import OkrListName from './parts/list-name';
import Objective from './parts/objective';
import OkrTaskAdd from './parts/task-add';
import OkrTask from './parts/task';
import OkrAddGroup from './parts/add-group';

import { getGroupedTasks, updateTask, addTask, updateObjective, updateKeyResult, updateListName } from '../../store/okr';

function mapStateToProps(state) {
	return {
		groupedTasks: getGroupedTasks(state),
		objective: state.okr.primaryObjective,
		keyResults: state.okr.keyResults,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		updateTask,
		addTask,
		updateObjective,
		updateKeyResult,
		updateListName
	}, dispatch);
}

function groupedProps(groupedTasks, updateTask, addTask, updateListName ) {
	return groupedTasks.map((group, index) => {
		const tasks = group.tasks.map((task, i) =>
			<OkrTask task={task} key={i} disabled={task.disabled} onChange={updatedTask => updateTask(updatedTask)}></OkrTask>
		);

		return <div className="okr-task-list" key={index}>
			<OkrListName value={group.title} onChange={title => updateListName(title, group.id)}></OkrListName>
			{tasks}
			<OkrTaskAdd groupId={group.id} onComplete={newTask => addTask(newTask)}></OkrTaskAdd>
			<OkrAddGroup></OkrAddGroup>
		</div>;
	})
}

const Okr = ({ groupedTasks, updateTask, addTask, keyResults, objective, updateObjective, updateKeyResult, updateListName }) => {
	console.log(objective)

	return (
		<div className="okr-page">
			<div className="okr-page__content">
				<Objective
					keyResults={keyResults}
					objective={objective}
					onKeyResultChange={(val, i) => updateKeyResult(val, i)}
					onObjectiveChange={val => updateObjective(val)}>
				</Objective>
				{groupedProps(groupedTasks, updateTask, addTask, updateListName)}
			</div>
		</div>
	)
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Okr);