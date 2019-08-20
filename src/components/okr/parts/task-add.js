import React from 'react'

const OkrTaskAdd = ({ onComplete, groupId = -1 }) => {
  const defaultValue = { title: '', groupId };
  let currentValue = { ...defaultValue };

  function changed(val) {
    currentValue = {
      ...currentValue,
      ...val
    };
  }

  function onKeyUp(evt) {
    if (evt.charCode === 13) { // enter
      onComplete && onComplete(currentValue);
      evt.target.value = '';
    }
  }

  return (
    <div className="okr-task okr-task--add">
        <span className="okr-task__type" aria-label="cat" role="img">😸</span>
        <input
          type="text"
          placeholder="Add a new task..."
          defaultValue={currentValue.title}
          onChange={evt => changed({title: evt.target.value})}
          onKeyPress={evt => onKeyUp(evt)}/>
    </div>
  );
}

export default OkrTaskAdd