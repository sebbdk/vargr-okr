import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';

import { getGroupedTasks, updateObjective, updateKeyResult, synchronize } from '../../store/okr.actions';
import { login } from '../../store/auth';

import GroupedProps from './parts/grouped-props';
import Objective from './parts/objective';

function mapStateToProps(state) {
	return {
		groupedTasks: getGroupedTasks(state),
		objective: state.okr.primaryObjective,
		keyResults: state.okr.keyResults,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		updateObjective,
		updateKeyResult,
		login,
		synchronize
	}, dispatch);
}

const Okr = ({ keyResults, objective, updateObjective, updateKeyResult, login, synchronize }) => {
	function promptLogin() {
		const username = prompt('What is your username?');
		const password = prompt('What is your password?');

		login(username, password);
	}

	return (
		<div className="okr-page">
			<div className="okr-page__content">
				<br />
				<button onClick={() => promptLogin()}>Login</button>
				<button onClick={() => synchronize()}>Get data</button>
				<Objective
					keyResults={keyResults}
					objective={objective}
					onKeyResultChange={(val, i) => updateKeyResult(val, i)}
					onObjectiveChange={val => updateObjective(val)}>
				</Objective>
				<GroupedProps></GroupedProps>
			</div>
		</div>
	)
}

export default connect(() => mapStateToProps, mapDispatchToProps)(Okr);