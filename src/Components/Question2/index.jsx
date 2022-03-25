/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

const index = () => {
  const datas = ['Danawi Liam','Tarjaya','Daruna','Warsoni','John Wick','Hadi PS','Derian Lekso']
  const [newData, setNewData] = useState([])
  const [value, setValue] = useState('')

  const getData = (e) => {
    setValue(e.target.value.toLowerCase())
    let data = datas.filter((dt) => {
      let seacrhValue = dt.toLowerCase();
      return seacrhValue.indexOf(value) !== -1
    })
    setNewData(data)
  }
  return (
    <div className='text-center'>
      <input type="text" onChange={(e) => getData(e)} placeholder='search....' />
      <div className="data">
        {value.length > 0 ? (
          newData.map((dt, index) => (
            <p key={index}>{dt}</p>
          ))
        )
        :
        datas.map((dt, index) => (
          <p key={index}>{dt}</p>
        ))
        }
        
      </div>
    </div>
  )
}

export default index