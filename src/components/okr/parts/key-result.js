import React from 'react'

const OkrKeyResult = ({ active, children, onClick }) => {
  return (
    <div className="okr-key-result">
        <input type="text" placeholder="A key result..." />
    </div>
  )
}

export default OkrKeyResult