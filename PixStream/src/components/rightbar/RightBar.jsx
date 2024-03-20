import Message from '../message/Message'
import './rightBar.css'
import FriendReqe from '../friendReqe/FriendReqe'

export default function RightBar() {
  return (
    <div className='rightBar'>
    <div className='rightbar-container'>
    <Message />
    <FriendReqe />
    </div> 
    
    </div>
  )
}
