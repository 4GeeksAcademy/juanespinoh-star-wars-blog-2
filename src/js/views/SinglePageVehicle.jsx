import React,{useEffect,useState} from 'react'
import { useGlobalContext } from '../store/appContext'
import { useParams } from "react-router"

const SinglePage = () => {
  const [isLoading,setIsLoading]=useState(true)
  const {store,actions:{fetchSingleVehicle,setVehicleInfo}}=useGlobalContext()
  const {itemId}=useParams()

  useEffect(()=>{
    fetchSingleVehicle(itemId)
    setIsLoading(false)

    return ()=>{
      setVehicleInfo()
    }
  },[])

 const vehicleName=store.vehicleInfo.properties?.name

 const vehicleCargoCapacity=store.vehicleInfo.properties?.cargo_capacity
 const vehiclepassengers=store.vehicleInfo.properties?.passengers
 const vehicleCrew=store.vehicleInfo.properties?.crew
 const vehicleLength=store.vehicleInfo.properties?.length
 const vehicleModel=store.vehicleInfo.properties?.model

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
          <h1>{vehicleName}</h1>
          <p className=''>
          The quick brown fox jumps over the lazy dog while the sun shines brightly in the clear blue sky, creating a perfect day for outdoor activities and peaceful contemplation of nature's beauty.
          The quick brown fox jumps over the lazy dog while the sun shines brightly in the clear blue sky, creating a perfect day for outdoor activities and peaceful contemplation of nature's beauty.
          </p>

        </div>
      </div>
      <div style={{height:"25vh"}} className="row ">
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Name</h4>
            <p style={{color:"red"}}>{vehicleName}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'>Cargo Capacity</h4>
            <p style={{color:"red"}}>{vehicleCargoCapacity}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Passengers</h4>
            <p style={{color:"red"}}>{vehiclepassengers}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Crew</h4>
            <p style={{color:"red"}}>{vehicleCrew}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'> Length</h4>
            <p style={{color:"red"}}>{vehicleLength}</p>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
            <h4 style={{color:"red"}} className='text-center'>Model</h4>
            <p style={{color:"red"}}>{vehicleModel}</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage