import React from 'react'

const Button = ({btnName}) => {
  return (
    <div>
      <button>
      {btnName}
      </button>
      {/* {buttonName || 'Click Here'} */}
    </div>
  )
}

export default Button
