import React from 'react'

import Fadhil from '../assets/fadhil.jpg'

const Profile = () => {
  return (
    <div className='d-flex justify-content-center'>
      <img className='w-75 rounded shadow-lg' src={Fadhil} alt={"fadhil.jpg"} />
    </div>
  )
}

export default Profile
