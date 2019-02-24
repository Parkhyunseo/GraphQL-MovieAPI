const hyunseo = {
    name: "Hyunseo",
    age: 24,
    gneder : "male"
};

const resolvers = {
    Query: {
        person: () => hyunseo
    }
};

export default resolvers;