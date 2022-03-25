/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const index = () => {
  const [data, setData] = useState([])
  useEffect(()=> {
    axios.get(`https://gorest.co.in/public/v2/users`)
      .then(res => {setData(res.data)})
  },[])
  return (
    <div>
      <h2 className='text-center my-2 text-xl font-bold'>Table</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
            {data.map((dt)=> (
              <tr key={dt.id}>
                <td className='px-8'>{dt.name}</td>
                <td className='px-8'>{dt.gender}</td>
                <td className='px-8'>{dt.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default index