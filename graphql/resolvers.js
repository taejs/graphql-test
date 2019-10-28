//query를 해결하는 방법에 대한 구현
const teddy = {
    name : "teddy",
    age : 100,
    IDE : "intelliJ"
}
const resolvers = {
    Query : {
        developer : ()=> teddy
    }
}
export default resolvers;