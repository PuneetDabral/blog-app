import React from 'react'
import { useParams } from 'react-router-dom'


function BlogDetails() {
    const {id} = useParams()
  return (
    <div><h2>BlogDetails -{id}</h2></div>
  )
}

export default BlogDetails