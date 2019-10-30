
export let developers = [
  {
    id:0,
    name : "teddy",
    age : 100,
    IDE : "intelliJ"
  },
  {
    id:1,
    name : "bobby",
    age : 10,
    IDE : "intelliJ"
  }
]

export const getById = id => {
  return developers.filter(developer => (developer.id === id))[0];
}

export const deleteDeveloper = id => {
  developers = developers.filter(developer => (developer !== id))
  return developers.filter(developer => (developer !== id)).length ? true : false;
}
export const addDeveloper = (name, age) => {
  const newMovie = {
    id : developers.length + 1,
    name, age
  };
  developers = developers.push(newMovie);
  return newMovie;
}
