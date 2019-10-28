
export const developers = [
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

