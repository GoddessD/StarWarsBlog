const getState = ({ getStore, getActions, setStore }) => {
  const apiUrl = "https://swapi.dev/api/";
  return {
    store: {
      people: [],
      planets: [],
      
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
    }
  }}
};
//
export default getState;
