import { people, getById } from "./db.js";

const resolvers = {
    Query: {
        people: () => people,
        person: (id) => getById(id);
    }
};

export default resolvers;