import React from 'react'

const OkrListName = ({ active, children, onClick }) => {
  return (
    <div className="okr-list-name">
        <input type="text" placeholder="List name" />
    </div>
  )
}

export default OkrListName