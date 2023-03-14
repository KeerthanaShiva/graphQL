const userList = [
    {
        id: 1,
        name: "Keerthana",
        username: "keerth",
        age: 21,
        nationality: "Indian",
        friends: [
            {
                id: 2,
                name: "Nirupam",
                username: "niru",
                age: 21,
                nationality: "London"
            },
            {
                id: 3,
                name: "ShivuPrasad",
                username: "shivu",
                age: 20,
                nationality: "Brazil"
            }
        ]
    },
    {
        id: 2,
        name: "Nirupam",
        username: "niru",
        age: 21,
        nationality: "London",
        friends: [
            {
                id: 3,
                name: "ShivuPrasad",
                username: "shivu",
                age: 20,
                nationality: "Brazil"
            }
        ]
    },
    {
        id: 3,
        name: "ShivuPrasad",
        username: "shivu",
        age: 20,
        nationality: "Brazil"
    },
    {
        id: 4,
        name: "Pavan",
        username: "pavu",
        age: 22,
        nationality: "USA"
    },
    {
        id: 5,
        name: "Shreyas",
        username: "gs",
        age: 23,
        nationality: "Germany"
    },
    {
        id: 6,
        name: "Anusha",
        username: "anu",
        age: 23,
        nationality: "Germany"
    }
];

const MovieList = [
    {
        id: 1,
        name: "Taare jameen par",
        yearOfPublication: 2010,
        isInTheaters: true
    },
    {
        id: 2,
        name: "Barfi",
        yearOfPublication: 2012,
        isInTheaters: false
    },
    {
        id: 3,
        name: "Wolf of the Wall Street",
        yearOfPublication: 2009,
        isInTheaters: true
    },
    {
        id: 4,
        name: "Forest Gump",
        yearOfPublication: 2001,
        isInTheaters: false
    },
    {
        id: 5,
        name: "Googly",
        yearOfPublication: 2015,
        isInTheaters: true
    }
]

module.exports = { userList,MovieList }