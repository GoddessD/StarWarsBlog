const getState = ({ getStore, getActions, setStore }) => {
  const apiUrl = "https://swapi.dev/api/";
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      
    },
    actions: {
      getPeople: () => {
        fetch(apiUrl + "people")
          .then((res) => res.json())

          .then((data) => setStore({ people: data.results }));
      },
      getPlanets: () => {
        fetch(apiUrl + "planets")
          .then((res) => res.json())

          .then((data) => setStore({ planets: data.results }));
    },
      getVehicles: () => {
        fetch(apiUrl + "vehicles")
        .then((res) => res.json())

        .then((data) => setStore({ vehicles: data.results }));
      },
      addToFavorites: (newFavorite) => {
          let store = getStore()
          store.favorites.push(newFavorite)
          setStore(store)
      },
    // delete items from favorites
    deleteFavorites: (index) => {
      let store = getStore()
      let newFavorites = store.favorites.filter((item,idx)=> idx !=index) 
      setStore({ favorites: newFavorites })
  }} 
}
}
//
export default getState;
