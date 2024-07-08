import React from 'react'
import UnauthNavbar from '../components/UnauthNavbar'
import UserRegistrationForm from '../components/UserRegistrationForm'

const Home = () => {
  return (
    <div className='px-16'>
      <UnauthNavbar />
      <div className={`p-5 border rounded-md`}>
        <UserRegistrationForm />
      </div>
    </div>
  )
}

export default Home
