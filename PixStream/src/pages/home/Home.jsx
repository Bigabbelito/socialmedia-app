import React from 'react'
import Stories from '../../components/stories/Stories'
import AddPost from '../../components/addPost/AddPost'
import Feed from '../../components/feeds/Feed'



export default function Home() {
  return (
    <div>
   <Stories />
   <AddPost />
   <Feed />
    </div>
  )
}
