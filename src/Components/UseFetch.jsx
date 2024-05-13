import React from "react"
import { useState, useEffect } from "react"


const UseFetch = (url) =>{
const [products, setProducts] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [errorMessage, setErrorMessage] = useState(null)

 useEffect(()=>{
  const abortCount = new AbortController();
 setTimeout(() =>{   
  fetch(url, {signal: abortCount.signal})
  .then (res =>{
   if(!res.ok){
     throw Error ("Could not fetch data. An error occurred.")
    } 
   return res.json();
 })
 .then(data =>{
   console.log(data)
   setProducts (data)
   setIsLoading (false)
 }).catch((error)=>{
  if(error.name === "AbortError")
   console.log('fetch aborted')
   setIsLoading (false)
   setErrorMessage (`error occured.${error.message}`)
 })
}, 1000)
 return ()=>abortCount.abort()
}, [url])
 
return {data: products, isLoading, errorMessage}
}

export default UseFetch
