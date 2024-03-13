import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login'>
    <div className='card'>
    <div className='left'>
    <h2> - <br/> PixStream <br/> - </h2>
    <p>"Lorem ipsum dolor sit amet, in reprehenderit in voluptate
     velit esse cillum dolore eu fugiat nulla pariatur."
     </p>
    <span>Don't have an account?</span>
    <Link to={'/signup'}>
    <button className='btn btn-primary'>Register</button>
    </Link>
    </div>
    <form className='right'>
    <input type='text' required placeholder='username'/>
    <input type='password' required placeholder='password'/>
    <button type='submit' className='btn'>Login</button>
    </form>
    </div>
     </div>
  )
}
