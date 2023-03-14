const { userList, MovieList } = require("../fakeData")
const _ = require("lodash")

const resolvers = {
    Query: {

        //USER RESOLVERS
        users: () => {
            return userList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(userList, { id: Number(id) });
            return user;
        },

        //MOVIE RESOLVERS
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name: name });
            return movie;
        }
        

    },
    User: {
        favouriteMovies: () => {
            return _.filter(MovieList, (movie) => movie.yearOfPublication >= 2010 && movie.yearOfPublication <= 2020);
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = userList[userList.length - 1].id;
            user.id = lastId + 1;
            userList.push(user);
            return user;
        },
        updateUserName: (parent, args) => {
            const { id, newUsername } = args.input;
            let updatedUser;
            userList.forEach((user) => {
                if (user.id == id) {
                    user.username = newUsername;
                    updatedUser = user;
                }
            });
            return updatedUser;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(userList, (user) => 
                user.id == Number(id));
            return null;
        }
    }
}

module.exports = { resolvers }