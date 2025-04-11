import React,{useEffect,useState} from 'react'
import { useGlobalContext } from '../store/appContext'
import { useParams } from "react-router"

const SinglePage = () => {
  const [isLoading,setIsLoading]=useState(true)
  const {store,actions:{fetchSinglePlanet,setPlanetInfo}}=useGlobalContext()
  const {itemId}=useParams()

  useEffect(()=>{
    fetchSinglePlanet(itemId)
    setIsLoading(false)

    return ()=>{
        setPlanetInfo()
    }
  },[])

 const planetName=store.planetInfo.properties?.name

 const planetClimate=store.planetInfo.properties?.climate
 const planetDiameter=store.planetInfo.properties?.diameter
 const planetRotationPeriod=store.planetInfo.properties?.rotation_period
 const planetSurfaceWater=store.planetInfo.properties?.surface_water
 const planetPopulation=store.planetInfo.properties?.population

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
          <h1>{planetName}</h1>
          <p className=''>
          The quick brown fox jumps over the lazy dog while the sun shines brightly in the clear blue sky, creating a perfect day for outdoor activities and peaceful contemplation of nature's beauty.
          The quick brown fox jumps over the lazy dog while the sun shines brightly in the clear blue sky, creating a perfect day for outdoor activities and peaceful contemplation of nature's beauty.
          </p>

        </div>
      </div>
      <div style={{height:"25vh"}} className="row ">
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Name</h4>
            <p style={{color:"red"}}>{planetName}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'>Climate</h4>
            <p style={{color:"red"}}>{planetClimate}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Diameter</h4>
            <p style={{color:"red"}}>{planetDiameter}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Rotation Period</h4>
            <p style={{color:"red"}}>{planetRotationPeriod}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Surface Water</h4>
            <p style={{color:"red"}}>{planetSurfaceWater}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'>Population</h4>
            <p style={{color:"red"}}>{planetPopulation}</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage