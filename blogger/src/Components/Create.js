import React from 'react'
import { useState } from 'react'

const Create = () => {
  const [title ,Settitle] = useState('');
  const [body ,Setbody] = useState('');
  const [author ,Setauthor] = useState('Puneet');

  const handleSubmit=(e)=>{

   e.preventDefault();
   const blog ={title,body,author};
   console.log(blog)
  }
 

  return (
    <div className='create'>
      <h2>create a new blog</h2>
    <form onSubmit={handleSubmit} >
      <label>Blog title:</label>
      <input  type="text" required value={title}  onChange={(e)=> Settitle(e.target.value)} />
      <label>Blog body:</label>
      <textarea required value={body} onChange={(e)=> Setbody(e.target.value)} ></textarea>
      <label>Blog author:</label>
      <select value={author} onChange={(e)=> Setauthor(e.target.value)} >
        <option value="Puneet">Puneet</option>
        <option value="Hitesh">Hitesh</option>
      </select>
      <button>Add blog</button>
      {/* <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p> */}
    </form>
    </div>
  )
}

export default Create