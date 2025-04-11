
const BASE_URL="https://www.swapi.tech/api/"
// planets  vehicles
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites:[],
			chracterList:[],
			planetsList:[],
			vehiclesList:[],
			characterInfo:{},
			planetInfo:{},
			vehicleInfo:{},
		},
		actions: {
			fetchCharacters:async()=>{
				try {
					const response=await fetch(`${BASE_URL}people/`)
					if(!response.ok)throw new Error("Error no ok fetching  character")
						const data =await response.json()
					setStore({...getStore(),chracterList:data.results})
				} catch (error) {
					console.log(error)
				}
			},
			fetchPlanets:async()=>{
				try {
					const response=await fetch(`${BASE_URL}planets/`)
					if(!response.ok)throw new Error("Error no ok fetching  character")
						const data =await response.json()
					setStore({...getStore(),planetsList:data.results})
				} catch (error) {
					console.log(error)
				}
			},
			fetchVehicles:async()=>{
				try {
					const response=await fetch(`${BASE_URL}vehicles/`)
					if(!response.ok)throw new Error("Error no ok fetching  character")
						const data =await response.json()
					setStore({...getStore(),vehiclesList:data.results})
				} catch (error) {
					console.log(error)
				}
			},
			fetchSingleCharacter:async(id)=>{
				try {
					const response=await fetch(`${BASE_URL}people/${id}`)
					if(!response.ok)throw new Error("Error no ok fetching single character")
						const data =await response.json()
					setStore({...getStore(),characterInfo:data.result})
				} catch (error) {
					console.log(error)
				}
			},
			fetchSinglePlanet:async(id)=>{
				try {
					const response=await fetch(`${BASE_URL}planets/${id}`)
					if(!response.ok)throw new Error("Error no ok fetching single planet")
						const data =await response.json()
					setStore({...getStore(),planetInfo:data.result})
				} catch (error) {
					console.log(error)
				}
			},
			fetchSingleVehicle:async(id)=>{
				try {
					const response=await fetch(`${BASE_URL}vehicles/${id}`)
					if(!response.ok)throw new Error("Error no ok fetching single vehicle")
						const data =await response.json()
					setStore({...getStore(),vehicleInfo:data.result})
				} catch (error) {
					console.log(error)
				}
			},

			setCharacterInfo:()=>{
				setStore({...getStore,characterInfo:{}})
			},
			setPlanetInfo:()=>{
				setStore({...getStore,planetInfo:{}})
			},
			setVehicleInfo:()=>{
				setStore({...getStore,vehicleInfo:{}})
			},
			addToFavorites:(info)=>{
				
				const checkDuplicate=getStore().favorites.find((elem)=>elem.id===info.id)
				
				 if(checkDuplicate?.id){
					return
				 }
				setStore({...getStore(),favorites:[...getStore().favorites,info]})
			},
			deleteToFavorites:(id)=>{
				const newArray=getStore().favorites.filter((elem)=>elem.id!==id)
				setStore({...getStore,favorites:newArray})
			},
		}
	};
};

export default getState;
