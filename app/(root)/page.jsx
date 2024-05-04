"use client"

import Loader from '@components/Loader'
import PostCard from '@components/cards/PostCard'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [loading, setLoading] = useState(true)

    const [feedPost, setFeedPost] = useState([])

    const getFeedPost = async () => {
        const response = await fetch("/api/post");
        const data = await response.json();
        setFeedPost(data);
        setLoading(false);
      };

    useEffect(() => {
        getFeedPost()
    }, [])
  return loading ? <Loader /> : (
    <div className='flex flex-col gap-10'>
        {feedPost.map((post) => (
            <PostCard />
        ))} 
    </div>
  )
}

export default Home