import React from 'react'
import OkrKeyResult from './key-result';

const Objective = ({ active, children, onClick }) => {
  return (
    <div className="okr-objective">
        <input type="text" className="okr-primary-objective" placeholder="Okr primary goal" />
        <OkrKeyResult></OkrKeyResult>
        <OkrKeyResult></OkrKeyResult>
        <OkrKeyResult></OkrKeyResult>
    </div>
  )
}

export default Objective