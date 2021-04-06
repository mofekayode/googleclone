import React,{useState,useEffect}from 'react'

const CONTEXT_KEY='5d239a1e292350e4e'
const API_KEY='AIzaSyD03DnnCylEjWLpMd0eD8xUc7C7VQPeFqo'

const useGoogleSearch=(term) =>{
    console.log(term)
   const [data, setData]= useState(null)
   useEffect(()=>{
    const fetchData = async ()=>{
        console.log("trial"+term)
       fetch(
         `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response=>response.json())
        .then(result=>{
            setData(result)
            console.log(result)
        })
      
    }
    fetchData()
   },[term])
   return{data}
 
}


export default useGoogleSearch
