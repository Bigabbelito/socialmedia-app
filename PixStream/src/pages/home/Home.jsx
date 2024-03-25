import React from 'react'
import Stories from '../../components/stories/Stories'
import AddPost from '../../components/addPost/AddPost'
import Feed from '../../components/feeds/Feed'
import Feeds from '../../components/feeds/Feeds'



export default function Home() {
  return (
    <div>
   <Stories />
   <AddPost />
   <Feeds />
    </div>
  )
}
