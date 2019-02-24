export const people = [
    {
        id:"1",
        name: "Hyunseo",
        age: 25,
        gender : "male"
    },
    {
        id:"2",
        name: "Daeho",
        age: 24,
        gender : "male"
    },
    {
        id:"3",
        name: "Jihun",
        age: 27,
        gender : "male"
    },
    {
        id:"4",
        name: "Yebin",
        age: 21,
        gender : "female"
    },
    {
        id:"5",
        name: "Minji",
        age: 22,
        gender : "female"
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}