import React from 'react'
import { debounce } from '../../../lib/debounce';

const OkrListName = ({ onChange, onClose, value }) => {
  const debouncedCalueChanged = debounce((val) => {
    onChange && onChange(val);
  }, 500);

  function add() {
    if(window.confirm("Are you sure?")) {
      onClose();
    }
  }

  return (
    <div className="okr-list-name">
        <input type="text" defaultValue={value} onChange={evt => debouncedCalueChanged(evt.target.value)} placeholder="List name" />
        <button onClick={add}>Close group</button>
    </div>
  )
}

export default OkrListName