import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='text-center my-2 text-sm font-bold text-right px-2'>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default index