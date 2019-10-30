//query를 해결하는 방법에 대한 구현
import {addDeveloper, deleteDeveloper, developers, getById} from './db';

const resolvers = {
    Query : {
        developer : (_, {id}) => getById(id),
        developers : ()=> developers
    },
    Mutation : {
        addDeveloper : (_, {name, age}) => addDeveloper(name, age),
        deleteDeveloper : (_, {id}) => deleteDeveloper(id)
    }
}
export default resolvers;
