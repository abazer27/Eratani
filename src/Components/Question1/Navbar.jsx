import React from 'react'
import logo from './../../assets/img/logo.png'

const Navbar = () => {
  return (
    <div className='container'>
      <ul className='flex flex-row flex-wrap py-4 justify-evenly items-center'>
        <div className='w-28'>
          <img src={logo} alt="logo" className='w-auto h-auto'/>
        </div>
        <li className='cursor-pointer'>Beranda</li>
        <li className='cursor-pointer'>Tentang Kami</li>
        <li className='cursor-pointer'>Tips & Berita Pertanian</li>
        <li className='cursor-pointer'>Kegiatan</li>
        <li className='px-4 py-2 bg-yellow-400 rounded-md cursor-pointer'>Mitra Petani</li>
      </ul>
    </div>
  )
}

export default Navbar