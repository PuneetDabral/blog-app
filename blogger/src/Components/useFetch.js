
import { useState,useEffect } from 'react'

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null)
    const [isPending , setIsPending] = useState(true)
    const [error,Seterror] = useState(null)

    useEffect(()=>{
        // console.log('heelo');
        // console.log(blogs);
        setTimeout(()=>{
        fetch( url ).then(
          res => { return res.json()}
          ).then(data=>{
            console.log(data);
            setBlogs(data)
            setIsPending(false)
          }).catch(err=>{
            //any type of netwotk error
            console.log(err.message)
            Seterror(err.message)
            setIsPending(false)
          })
        },1000);
      },[]);
      return {blogs,isPending,error}
}

export default useFetch