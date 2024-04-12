import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex justify-content-center'>
      Micro Frontend Header
      <Link to='/' className='px-2'>Home</Link>
      <Link to='/about' className='px-2'>About</Link>
    </div>
  )
}

export default Header
