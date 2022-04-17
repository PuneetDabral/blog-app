import {useState,useEffect} from 'react'
import BlogList from './BlogList';


const Home = () => {
  //array destructring to storing two values
//  const [name, setName] = useState('puneet')
//  const [age, setAge] = useState(20)

  // let name =  'Puneet';
  // const handleClick = () => {
  //   // name='abhi'
  //   // console.log("clicked");
  //   setName('abhi')
  //   setAge(30)
  
  // }
  // [
  //   {title: 'Blog 1', body: 'This is blog 1',author : 'Puneet', id: 1},
  //   {title: 'Blog 2', body: 'This is blog 2',author : 'Puneet', id: 2},
  //   {title: 'Blog 3', body: 'This is blog 3',author : 'Puneet', id: 3},
  // ]
  const [blogs, setBlogs] = useState(null)

  // const [name,SetName] =useState('abhi')

  // const handleDelete = (id) => {
  //   setBlogs(blogs.filter(blog => blog.id !== id))

  // }

  useEffect(()=>{
    // console.log('heelo');
    // console.log(blogs);
    fetch( 'http://localhost:8000/blogs' ).then(
      res => { return res.json()}
      ).then(data=>{
        console.log(data);
        setBlogs(data)
      })
  },[]);
  // }, [name]);  
  //depamdancy array so that our use effect array is not always load if the state chnages it does not reload 

  return (
    <div className="home">
     
      {/* <p>my name is {name} an i am  {age} year old </p> */}
      {/* <button onClick={handleClick}>Click Me </button> */}
      {/* handleDelete={handleDelete} */}
     {blogs && <BlogList blogs={blogs} title='all blogs'/>}
      {/* <button onClick={()=>SetName('Puneet')}></button> */}
      {/* <p>{name}</p> */}
    
  
    </div>
  );
}
 
export default Home;