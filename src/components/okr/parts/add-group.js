import React from 'react'

const OkrAddGroup = ({ onAdd, groupId }) => {
  return (
    <div className="okr-add-group">
        <button onClick={() => onAdd(groupId)}>Add group here</button>
    </div>
  )
}

export default OkrAddGroup