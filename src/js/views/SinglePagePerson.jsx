import React,{useEffect,useState} from 'react'
import { useGlobalContext } from '../store/appContext'
import { useParams } from "react-router"

const SinglePage = () => {
  const [isLoading,setIsLoading]=useState(true)
  const {store,actions:{fetchSingleCharacter,setCharacterInfo}}=useGlobalContext()
  const {itemId}=useParams()

  useEffect(()=>{
    fetchSingleCharacter(itemId)
    setIsLoading(false)

    return ()=>{
      setCharacterInfo()
    }
  },[])

 const characterName=store.characterInfo.properties?.name

 const characterBirth=store.characterInfo.properties?.birth_year
 const characterGender=store.characterInfo.properties?.gender
 const characterHeight=store.characterInfo.properties?.height
 const characterSkin=store.characterInfo.properties?.skin_color
 const characterEye=store.characterInfo.properties?.eye_color

 if(isLoading){
  return <div>Cargando...</div>
 }


  
  return (
    <div 
    style={{ minHeight: "auto" }}
    className='container-fluid bg-black text-white'>
      <div style={{height:"60vh"}} className="row border-bottom border-2 border-danger">
        <div  className='col-6  d-flex justify-content-center align-items-center'>
          <img style={{width:"100%",height:"300px"}} src="https://placehold.co/800x600" alt="img placeholder" />

        </div>
        <div  className='col-6  d-flex justify-content-center align-items-center flex-column '>
          <h1>{characterName}</h1>
          <p className=''>
          The quick brown fox jumps over the lazy dog while the sun shines brightly in the clear blue sky, creating a perfect day for outdoor activities and peaceful contemplation of nature's beauty.
          The quick brown fox jumps over the lazy dog while the sun shines brightly in the clear blue sky, creating a perfect day for outdoor activities and peaceful contemplation of nature's beauty.
          </p>

        </div>
      </div>
      <div style={{height:"25vh"}} className="row ">
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Name</h4>
            <p style={{color:"red"}}>{characterName}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Year of Birth</h4>
            <p style={{color:"red"}}>{characterBirth}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Gender</h4>
            <p style={{color:"red"}}>{characterGender}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Height</h4>
            <p style={{color:"red"}}>{characterHeight}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Skin Color</h4>
            <p style={{color:"red"}}>{characterSkin}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Eye Color</h4>
            <p style={{color:"red"}}>{characterEye}</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage