import React from 'react'
import { Link } from 'react-router-dom'


// const BlogList = (props) => {
    //destructing in props 
    // ,handleDelete
const BlogList = ({blogs,title}) => {
    // const blogs = props.blogs;
    // const title = props.title;

  return (
    <div className='blog-list'>
        <h3>{title}</h3>
            {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
        <Link to={`/blogdetails/${blog.id}`}>
        <h2>{blog.title}</h2>
        <p>Wriitten By {blog.author}</p>
        </Link>
        {/* <button onClick={()=> handleDelete(blog.id)}>Delete</button> */}
        
        </div>

      ))}
     
    </div>
  )
}

export default BlogList