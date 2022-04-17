import React from 'react'


// const BlogList = (props) => {
    //destructing in props 
const BlogList = ({blogs,title,handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;

  return (
    <div className='blog-list'>
        <h3>{title}</h3>
            {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Wriitten By {blog.author}</p>
        <button onClick={()=> handleDelete(blog.id)}>Delete</button>
        
        </div>

      ))}
     
    </div>
  )
}

export default BlogList