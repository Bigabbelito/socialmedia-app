import UserStory from './UserStory'
import './stories.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import StoriesData from '../../FackApis/StoriesData'


export default function Stories() {
  return (
    <div className='stories'>
       <UserStory />

       <Swiper style={{width:'80%'}} 
       slidesPerView={4}
       spaceBetween={7}>
       { 
          StoriesData.map(story =>(
            <SwiperSlide>
            <div className='story' key={story.id}>
                <div className='user'>
                   <img src={story.storyProfile} alt='' />
                </div>
                <img src={story.story}/>
                <h5>{story.name}</h5>

            </div>
           </SwiperSlide>
          ))
        }
        </Swiper>
    </div>
  )
}
