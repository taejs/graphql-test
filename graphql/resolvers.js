//query를 해결하는 방법에 대한 구현
import {developers, getById} from './db';

const resolvers = {
    Query : {
        developer : (_, {id}) => getById(id),
        developers : ()=> developers
    }
}
export default resolvers;