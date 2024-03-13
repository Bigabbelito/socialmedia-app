import { Link } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
  return (
    <div className='signup'>
    <div className='card'>
    <div className='left'>
    <h2>  - <br/>PixStream Signup<br/> - </h2>
    <p>"Lorem ipsum dolor sit amet, in reprehenderit in voluptate
     velit esse cillum dolore eu fugiat nulla pariatur."
     </p>
    <span>Have an account?</span>
    <Link to='/login'>
    <button className='btn btn-primary'>Login</button>
    </Link>
    </div>
    <form className='right'>
    <input type='text' required placeholder='Username'/>
    <input type='email' required placeholder='Email'/>
    <input type='password' required placeholder='Password'/>
    <button type='submit' className='btn'>Register</button>
    </form>
    </div>
     </div>
  )
}
