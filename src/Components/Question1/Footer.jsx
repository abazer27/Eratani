import React from 'react'
import logoW from './../../assets/img/logoW.png'

const Footer = () => {
  return (
    <div className='container bg-green-700 h-80 py-8 px-24 text-white'>
      <div className='w-28'>
        <img src={logoW} alt="logo" className='w-auto h-auto'/>
      </div>
      <div className='flex pt-4'>
        <div className='text-xs max-w-[14rem] grid pr-8 leading-5'>
          <p>Jl. Casablanca Raya Kav.88, Kel. Mentenf Dalam, Kec. Tebet, Gedung Pakuwon Tower Lt 26 UnitJ, Jakarta Selatan, DKI Jakarta 12870, Indonesia</p>
          <div className='pt-4'>
            <p>Email : info.eratani@eratani.co.id</p>
            <p>Telepon: +628119522577</p>
          </div>
        </div>
        <div className='text-lg max-w-[14rem] grid pl-4'>
          <p>Menu</p>
          <div className='text-xs leading-5'>
            <ul>
              <li>Tim Kami</li>
              <li>Mitra Eratani</li>
              <li>Tips & Berita Pertanian</li>
              <li>Karir</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-xs text-center pt-8'>
        <p>Copyright &copy; 2021 by PT Eratani Teknologi Nusantara</p>
      </div>
    </div>
  )
}

export default Footer