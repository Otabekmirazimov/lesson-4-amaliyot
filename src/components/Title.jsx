import React from 'react'

function Title({birthdaysCount}) {
  return (
    <div>
        <h1 className='title'>{birthdaysCount} Birthdays Today</h1>
    </div>
  )
}

export default Title