"use client"

import Loader from '@components/Loader'
import Posting from '@components/form/Posting'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditPost = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  const [postData, setPostData] = useState({})

  const getPost = async () => {
    const response = await fetch(`/api/post/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    setPostData(data)
    setLoading(false)
  }

  useEffect(() => {
    getPost()
  }, [id])

  return loading ? (
    <Loader />
  ) : (
    <div className='pt-6'>
      <Posting post={postData} />
    </div>
  )
}

export default EditPost