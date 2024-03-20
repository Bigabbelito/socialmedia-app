import  './feeds.css'

import Feeds from './Feeds'

import HomeFeedsData from '../../FackApis/HomeFeedData'
export default function Feed() {
  return (
    <div className='feeds'> 
  {
    HomeFeedsData.map(fed=>(
      <Feed fed={fed} key={fed.key} />
    ))
  }
    </div>
  )
}
