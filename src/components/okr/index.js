import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';

import { getGroupedTasks, updateObjective, updateKeyResult} from '../../store/okr.actions';

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
		updateKeyResult
	}, dispatch);
}

const Okr = ({ keyResults, objective, updateObjective, updateKeyResult }) => {
	return (
		<div className="okr-page">
			<div className="okr-page__content">
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