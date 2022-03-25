/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React from 'react'

const index = () => {
  const regist = () =>{
    axios.post(`https://gorest.co.in/public/v2/users`)
      .then(res => {console.log(res)})
  }
  return (
    <div>
      <h2 className='text-center my-2 text-xl font-bold'>Register User</h2>
      <form onSubmit={regist} className='flex flex-nowrap flex-col p-20'>
        <label>Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="text" />
        <label>Gender</label>
        <select name="" id="">
          <option></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>Status</label>
        <select name="" id="">
          <option></option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default index