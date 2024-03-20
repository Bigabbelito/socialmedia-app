import './stories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import CurrentUserData from '../../FackApis/CurrentUserData'

export default function UserStory() {
  return (
    <div className='story userStory' style={{width:'50%'}}>
                <div className='user'>
                   <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt='' />
                </div>
                <img src={CurrentUserData.map(user=>(user.CoverPhoto))}/>
                <label htmlFor='file' >
                  <FontAwesomeIcon icon={faAdd} />
                    <input type='file' id='file' />
                </label>
                <h5>Add Story</h5>
            </div>
  )
}
