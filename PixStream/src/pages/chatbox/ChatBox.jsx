import'./chatbox.css'
import CurrentUserData from '../../FackApis/CurrentUserData'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faFileAlt,  } from '@fortawesome/free-solid-svg-icons'
import Stories from '../../components/stories/Stories'


export default function ChatBox() {
  return (
    <>
    <Stories />
    <div className='chat-box'>
      <div className='chat-box-top'>
      <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt=''/>
          <div className='user-name'>
           <h3>{CurrentUserData.map(user=>(user.name))}</h3>
           <h5>{CurrentUserData.map(user=>(user.username))}</h5>
          </div>
      </div>
      <div className='chat-box-bottom'>
      <form action='#'>
        <input type='text' placeholder='Write Somthing' />
        <button className='btn btn-primary'>
          <FontAwesomeIcon icon={faArrowAltCircleRight}/>
        </button>
        <label className='btn btn-primary' htmlFor='CFile'>
          <FontAwesomeIcon icon={faFileAlt}/>
          <input type='file' id='CFile' />
        </label>
        </form>
      </div>
    </div>
    </>
  )
}
