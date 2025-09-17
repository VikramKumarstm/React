import React, { use } from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../data/blogs';

function BlogDetails() {

    const uselocation = useLocation()
    // console.log(uselocation)
    const currentId = uselocation.pathname.split('/')[2];
    // console.log(currentId)

    let currentData = blogs.filter((v) => v.id == currentId)[0]
  return (
    <div>
        <Header />
        <h1>{currentData.title}</h1>
    </div>
  )
}

export default BlogDetails