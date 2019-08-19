import React from 'react'

const OkrTask = ({ task, onChange }) => {
  let currentValue = { ...task };

  function changed(val) {
    currentValue = {
      ...currentValue,
      ...val
    };

    onChange && onChange(currentValue);
  }

  return (
    <div className="okr-task">
        <span className="okr-task__type" aria-label="cat" role="img">😸</span>
        <input
          type="text"
          placeholder="Something to do..."
          defaultValue={currentValue.title}
          onChange={evt => changed({ title: evt.target.value })} />
        <input
          type="checkbox"
          defaultChecked={currentValue.status === 1}
          onChange={evt => changed({ status: evt.target.checked ? 1 : 0 })}
          />
    </div>
  )
}

export default OkrTask