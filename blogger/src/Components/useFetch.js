
import { useState,useEffect } from 'react'

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null)
    const [isPending , setIsPending] = useState(true)
    const [error,Seterror] = useState(null)

    useEffect(()=>{
      const abortCont = new AbortController()
        // console.log('heelo');
        // console.log(blogs);
        setTimeout(()=>{
        fetch( url,{signal: abortCont.signal} ).then(
          res => { 
            if(!res.ok){
              throw new Error('something went wrong')
            }
            return res.json()}
          ).then(data=>{
            console.log(data);
            setBlogs(data)
            setIsPending(false)
          }).catch(err=>{
            //any type of netwotk error
            if(err.name === 'AbortError'){
              console.log('ftech aborted')
            }else{
          
            Seterror(err.message)
            setIsPending(false)
            }
          })
        },1000);
        // return () => abortCont.abot()
      },[url]);
      return {blogs,isPending,error}
}

export default useFetch