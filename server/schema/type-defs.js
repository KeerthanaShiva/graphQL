const {gql}=require("apollo-server")

const typeDefs = gql`


type User{
    id:ID!
    name:String!
    username:String!
    age:Int!
    nationality:nationality
    friends:[User]
    favouriteMovies:[Movie]
}
type Query{
    users:[User!]!
    user(id:ID!):User!
    movies:[Movie!]!
    movie:Movie!
    
}

input createUserInput{
    name:String!
    username:String!
    age:Int!
    nationality:nationality=INDIAN 
}

input updateUserName{
    id:ID!
    newUsername:String!
}

type Mutation{
    createUser(input:createUserInput!):User
    updateUserName(input:updateUserName!):User
    deleteUser(id:ID!):User
}

type Movie{
    id:ID!
    name:String!
    isInTheaters:Boolean!
    yearOfPublication:Int!
}

enum nationality{
    Indian
    Germany
    USA
    London
    Brazil
}

`
module.exports={typeDefs}