import React from 'react'
import OkrKeyResult from './key-result';

const Objective = ({keyResults = [], objective = '', onObjectiveChange, onAddKeyResult, onKeyResultChange }) => {
  const keyResultJsx = keyResults.map((kr, i) => {
    return <OkrKeyResult key={i} value={kr} onChange={val => onKeyResultChange(val, i)}></OkrKeyResult>;
  });

  function objectiveChanged(val) {
    onObjectiveChange && onObjectiveChange(val);
  }

  return (
    <div className="okr-objective">
        <input
          type="text"
          className="okr-primary-objective"
          defaultValue={objective}
          onChange={evt => objectiveChanged(evt.target.value)}
          placeholder="Okr primary goal" />
        {keyResultJsx}
    </div>
  )
}

export default Objective