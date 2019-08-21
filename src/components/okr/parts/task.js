import React from 'react'

const OkrTask = ({ task, onChange, onWaste, disabled = true }) => {
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
    let done = false;

    function mouseUp() {
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mousemove', mouseMove);

      taskElm.classList.remove('okr-task__dragger--active');
      taskElm.style.transform = `translate(0px, 0px)`;
      done = true;
    }

    function mouseMove(evt) {
      const offsetX = startX - evt.clientX;
      const offsetY = startY - evt.clientY;

      taskElm.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
    }

    setTimeout(() => {// dont trigger the styles on clicks
      if (!done) {
        taskElm.classList.add('okr-task__dragger--active');
      }
    }, 150);

    document.addEventListener('mouseup', mouseUp)
    document.addEventListener('mousemove', mouseMove)
  }

  function waste() {
    if(window.confirm("Are you sure?")) {
      onWaste(task.id)
    }
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
          <span className="okr-task__deletebtn" onClick={waste}>&#x1F5D1;</span>
      </div>
    </div>
  )
}

export default OkrTask