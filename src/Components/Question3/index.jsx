/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const index = () => {
  const [datas, setDatas] = useState([])
  const [open, setOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [ip, setIp] = useState('')
  const [search, isSearch] = useState([])
  const [value, setValue]= useState('')
  useEffect(()=> {
    axios.get('/data/MOCK_DATA.csv')
    .then(res => convertData(res.data))
    .then(resData => {setDatas(resData)})
  },[])
  const convertData = (str, delimiter = ',') =>{
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
    return arr;
  }
  const addDatas = async (e) =>{
    e.preventDefault()
    const newDatas = {id: datas.length+1, first_name: firstName, last_name: lastName, gender: gender, email: email, ip_address:ip}
    datas.push(newDatas)
    setOpen(false)
  }
  const deleteData = (e) =>{
    document.getElementById(e).remove()
  }
  const searchData = (e) => {
    setValue(e.target.value.toLowerCase())
    let data = datas.filter((dt) => {
      let searchValue = dt.first_name.toLowerCase();
      searchValue += dt.last_name.toLowerCase();
      searchValue += dt.email.toLowerCase();
      searchValue += dt.ip_address;
      return searchValue.indexOf(value) !== -1  
    })
    isSearch(data);
    console.log(e)
  }
  return (
    <div>
      <h2 className='text-center my-2 text-xl font-bold'>Searching Table</h2>
      <input type="text" onChange={(e)=>searchData(e)} placeholder='search...'/>
      <button onClick={()=>setOpen(true)}>Add Data</button>
      {open ? 
        (<div>
          <form onSubmit={addDatas}>
            <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder='Fisrt Name'/>
            <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder='Last Name'/>
            <select value={gender} onChange={(e)=> setGender(e.target.value)}>
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
            <input type="text" value={ip} onChange={(e)=> setIp(e.target.value)} placeholder='IP Address'/>
            <button type='submit'>Submit</button>
          </form>
        </div>
      ): null}
      <table className='border-collapse my-2 text-base'>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>IP Address</th>
            <th>Action</th>
          </tr>
          {value.length > 0 ? (
            search.map((dt)=> (
              <tr key={dt.id} id={dt.id}>
                <td>{dt.first_name}</td>
                <td>{dt.last_name}</td>
                <td>{dt.gender}</td>
                <td>{dt.email}</td>
                <td>{dt.ip_address}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={(e)=>deleteData(dt.id)}>Delete</button>
                </td>
              </tr>
            ))
          ):
            datas.map((dt)=> (
              <tr key={dt.id} id={dt.id}>
                <td>{dt.first_name}</td>
                <td>{dt.last_name}</td>
                <td>{dt.gender}</td>
                <td>{dt.email}</td>
                <td>{dt.ip_address}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={(e)=>deleteData(dt.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default index