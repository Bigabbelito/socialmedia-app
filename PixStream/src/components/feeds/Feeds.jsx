import  './feeds.css'


import Feed from './Feed'

import HomeFeedData from '../../FackApis/HomeFeedData'
//console.log(HomeFeedData[0]);

export default function Feeds() {
  console.log('hello world')
  HomeFeedData.forEach((x, index) => console.log('Feed: ', index, x));

  return (
    <div className='feeds'>
    {
      HomeFeedData.map(fed=>(
        <Feed fed={fed} key={fed.key} />
      ))
    }
      
    </div>
  )
}
