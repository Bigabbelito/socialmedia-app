import React from 'react'

import AddPosts from '../../components/addPost/AddPost'
import UserProfile from '../../components/userprofile/UserProfile'
import Feeds from '../../components/feeds/Feed'


export default function Profile() {
  return (
    <>
    <UserProfile />
    <AddPosts />
    <Feeds />
    </>
  )
}
