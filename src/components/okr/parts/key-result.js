import React from 'react'

const OkrKeyResult = ({ value, onChange }) => {
  function valueChanged(val) {
    onChange && onChange(val);
  }

  return (
    <div className="okr-key-result">
        <input type="text" defaultValue={value} onChange={evt => valueChanged(evt.target.value)} placeholder="A key result..." />
    </div>
  )
}

export default OkrKeyResult