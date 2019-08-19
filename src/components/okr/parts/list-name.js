import React from 'react'

const OkrListName = ({ onChange, value }) => {
  function valueChanged(val) {
    onChange && onChange(val);
  }

  return (
    <div className="okr-list-name">
        <input type="text" defaultValue={value} onChange={evt => valueChanged(evt.target.value)} placeholder="List name" />
        <button>Close group</button>
    </div>
  )
}

export default OkrListName