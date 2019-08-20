import React from 'react'

const OkrTask = ({ task, onChange, disabled = true }) => {
  let currentValue = { ...task };

  function changed(val = {}) {
    currentValue = {
      ...currentValue,
      ...val
    };

    onChange && onChange(currentValue);
  }

  function onKeyUp(evt) {
    if (["Enter", "Escape"].indexOf(evt.key) > -1) { // enter, escape
      changed({ disabled: !disabled });
    }
  }

  function onDoupleClick(evt) {
    const elm = evt.currentTarget;
    changed({ disabled: false });
    setTimeout(() => {
      elm.focus();
    }, 50);
  }

  let className = 'okr-task';
  if (currentValue.status === 1) {
    className += ' okr-task--done';
  }

  return (
    <div className={className} >
        <span className="okr-task__type" aria-label="cat" role="img">😸</span>
        <input
          type="text"
          onDoubleClick={onDoupleClick}
          readOnly={disabled}
          onBlur={evt => changed({ disabled: true })}
          onKeyDown={onKeyUp}
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