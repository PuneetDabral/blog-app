import React from 'react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title ,Settitle] = useState('');
  const [body ,Setbody] = useState('');
  const [author ,Setauthor] = useState('Puneet');
 const [isPending ,SetisPending] = useState(false)

 const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const result = { title, body, author };
    SetisPending(true)

    // console.log(result);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body:JSON.stringify(result)})
      .then((
        console.log('new blog added'),
        SetisPending(false),
        navigate('/')
      ))

    
  }

 

  return (
    <div className='create'>
      <h2>create a new blog</h2>
      <form onSubmit={handleSubmit}>
      <label>Blog title:</label>
      <input  type="text" required value={title}  onChange={(e)=> Settitle(e.target.value)} />
      <label>Blog body:</label>
      <textarea required value={body} onChange={(e)=> Setbody(e.target.value)} ></textarea>
      <label>Blog author:</label>
      <select value={author} onChange={(e)=> Setauthor(e.target.value)} >
        <option value="Puneet">Puneet</option>
        <option value="Hitesh">Hitesh</option>
      </select>
      {!isPending && <button>Add blog</button>}
      {isPending && <button disabled >Addingblog..</button>}
      {/* <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p> */}
    </form>
    </div>
  )
}

export default Create