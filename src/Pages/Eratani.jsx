import React from 'react'
import { Link } from 'react-router-dom'

const Eratani = () => {
  return (
    <div>
      <div className='text-center my-2 text-xl font-bold'>Eratani</div>
      <ul className='flex flex-nowrap flex-col gap-1 pl-2'>
        <li className='hover:bg-slate-300'><Link to='/question1'>Question 1</Link></li>
        <li className='hover:bg-slate-300'><Link to='/question2'>Question 2</Link></li>
        <li className='hover:bg-slate-300'><Link to='/question3'>Question 3</Link></li>
        <li className='hover:bg-slate-300'><Link to='/question4'>Question 4</Link></li>
        <li className='hover:bg-slate-300'><Link to='/question5'>Question 5</Link></li>
      </ul>
    </div>
  )
}

export default Eratani