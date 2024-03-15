import './nav.css'
import { Link } from 'react-router-dom'
import DarkMode from '../darkmode/DarkMode'
import CurrentUser from '../../FackApis/CurrentUserData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faEnvelope, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'




export default function Nav() {
  return (
    <nav>
    <div className='nav-container'>
     <div className='nav-left'>
      <Link to='/'>
      <h3 className='logo'>PixStream </h3>
      </Link>
      <Link to='/'>
      <FontAwesomeIcon icon={faHome}/>
      </Link>
      <Link to='/profile/:id'>
      <FontAwesomeIcon icon={faUser} />
      </Link>
      <div className='Nav-Searchbar'>
      <FontAwesomeIcon icon={faSearch} />
      <input type='search'/>
      </div>
     </div>

     <div className='nav-right'>
      <Link to='/chatbox/:id'>
      <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <Link to='/chatbox/:id'>
      <FontAwesomeIcon icon={faBell} />
      </Link>
      <DarkMode />
      <Link to='/chatbox/:id'>
      <FontAwesomeIcon icon={faBars} />
      </Link>
      <div className='user'>
      <img src={CurrentUser.map(user=>(user.ProfieImage))} alt='' />
      <h4>Abdulah Abou Shihab</h4>
      </div>

     </div>
     

    </div>
    </nav>
  )
}
