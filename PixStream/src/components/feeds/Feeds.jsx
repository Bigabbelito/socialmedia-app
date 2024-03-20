import  './feeds.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListDots } from '@fortawesome/free-solid-svg-icons'

export default function Feeds({fed}) {
  return (
    <div className='feed'>
        <div className='top-content'>
        <Link to='/profile/id'>
            <div className='user'>
               <img src={fed.feedPofile} alt='' />
               <div>
               <h5>{fed.name}</h5>
               <small>1 Minutes Ago</small>
               </div>
            </div>
        </Link>
        <span><FontAwesomeIcon icon={faListDots} /></span>
        </div>
        <p>{fed.desc}</p>
        <img src={fed.feedImage} alt='' />
    </div>
  )
}
