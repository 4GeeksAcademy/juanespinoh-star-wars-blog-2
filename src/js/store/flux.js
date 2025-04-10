
const BASE_URL="https://www.swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites:[],
			chracterList:[],
			characterInfo:{},
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

			setCharacterInfo:()=>{
				setStore({...getStore,characterInfo:{}})
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
