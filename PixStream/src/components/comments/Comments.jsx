import './comment.css'
import { Link } from 'react-router-dom'


import CommetData from '../../FackApis/CommetData'
import CurrentUserData from '../../FackApis/CurrentUserData'

export default function Comments() {
  return (
    <div className='comments'>
       <div className='writebox'>
          <form  action='#'>
             <div className='user'>
                <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt=''/>
                <input type='text' placeholder='write a comment' />
                <button type='subnit' className='btn btn-primary'>Send</button>
             </div>
          </form>
       </div>
       {
        CommetData.map(comment => (
            <Link to='/profile/id'>
               <div className='user' key={comment.id}>
               <img src={comment.commentProfile} alt=''/>
               <div>
               <h5>{comment.name}</h5>
               <p>{comment.CommeText}</p>
               <small>1h</small>
               </div>
               </div>
            </Link>
        ))
       }
    
    </div>
  )
}
