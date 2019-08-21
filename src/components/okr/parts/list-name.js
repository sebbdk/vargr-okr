import React from 'react'

const OkrListName = ({ onChange, onClose, value }) => {
  function valueChanged(val) {
    onChange && onChange(val);
  }

  function add() {
    if(window.confirm("Are you sure?")) {
      onClose();
    }
  }

  return (
    <div className="okr-list-name">
        <input type="text" defaultValue={value} onChange={evt => valueChanged(evt.target.value)} placeholder="List name" />
        <button onClick={add}>Close group</button>
    </div>
  )
}

export default OkrListName