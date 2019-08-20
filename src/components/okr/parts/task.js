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
    if (["Escape"].indexOf(evt.key) > -1) { // enter, escape
      changed({ disabled: true });
    }

    if (["Enter"].indexOf(evt.key) > -1) { // enter, escape
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

  function handleMouseDown(originalEvt) {
    const startX = originalEvt.clientX;
    const startY = originalEvt.clientY;
    const taskElm = originalEvt.currentTarget;

    function mouseUp(mevt) {
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mousemove', mouseMove);

      taskElm.classList.remove('okr-task__dragger--active');
      taskElm.style.transform = `translate(0px, 0px)`;
    }

    function mouseMove(evt) {
      const offsetX = startX - evt.clientX;
      const offsetY = startY - evt.clientY;

      taskElm.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
    }

    taskElm.classList.add('okr-task__dragger--active');

    document.addEventListener('mouseup', mouseUp)
    document.addEventListener('mousemove', mouseMove)
  }

  let className = 'okr-task';
  if (currentValue.status === 1) {
    className += ' okr-task--done';
  }

  if (!disabled) {
    className += ' okr-task--active';
  }

  return (
    <div className={className} >
      <div className="okr-task__dragger" onMouseDown={handleMouseDown}>
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
    </div>
  )
}

export default OkrTask