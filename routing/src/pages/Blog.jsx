import React from 'react'
import Header from '../common/Header'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'

function Blog() {
    let allBlogs = blogs.map((v, i) => {
        return (
            <div className='blog-items' key={i}>
                <h1>{v.title}</h1>
                <p>{v.body}</p>
                <button> <Link to={`/blog/${v.id}`}>Read More</Link></button>
            </div>
        )
    })
  return (
    <div>
        <Header />
        <h1>Blog Page</h1>
        <div className="container">
            {allBlogs}
        </div>
    </div>
  )
}

export default Blog